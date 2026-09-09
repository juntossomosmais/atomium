import fs from 'fs'
import path from 'path'

import type { AtRule, Declaration } from 'postcss'
import { parse } from 'postcss-scss'

import variableFamilies from '../../family-list.json'

const SRC_DIR = path.resolve(__dirname, '..')
const FAMILIES_DIR = path.join(SRC_DIR, 'families')

const parseScss = (filePath: string) => parse(fs.readFileSync(filePath, 'utf8'))

const includesInFile = (filePath: string) => {
  const includes: string[] = []

  parseScss(filePath).walkAtRules('include', (atRule: AtRule) => {
    includes.push(atRule.params)
  })

  return includes
}

const definesResponsiveVariables = (family: string) => {
  let found = false

  parseScss(path.join(FAMILIES_DIR, `${family}.scss`)).walkAtRules(
    'mixin',
    (atRule: AtRule) => {
      if (atRule.params === 'responsive-variables') found = true
    }
  )

  return found
}

describe('token family wiring', () => {
  it('declares nothing but custom properties in every family partial', () => {
    variableFamilies.forEach((family) => {
      const nonCustomProps: string[] = []

      parseScss(path.join(FAMILIES_DIR, `${family}.scss`)).walkDecls(
        (decl: Declaration) => {
          if (!decl.prop.startsWith('--')) {
            nonCustomProps.push(`${family}: ${decl.prop}`)
          }
        }
      )

      expect(nonCustomProps).toEqual([])
    })
  })

  it('gives every family partial a standalone entry that includes its variables mixin', () => {
    variableFamilies.forEach((family) => {
      const entryPath = path.join(SRC_DIR, `${family}.scss`)

      expect(fs.existsSync(entryPath)).toBe(true)
      expect(includesInFile(entryPath)).toContain(`${family}.variables`)
    })
  })

  it("includes every family in tokens.scss, with responsive mixins inside below('small')", () => {
    const tokensPath = path.join(SRC_DIR, 'tokens.scss')
    const topLevelIncludes: string[] = []
    const responsiveIncludes: string[] = []

    parseScss(tokensPath).walkAtRules('include', (atRule: AtRule) => {
      const parent = atRule.parent as AtRule | undefined

      if (
        parent?.type === 'atrule' &&
        parent.name === 'include' &&
        typeof parent.params === 'string' &&
        parent.params.startsWith('below(')
      ) {
        responsiveIncludes.push(atRule.params)
      } else {
        topLevelIncludes.push(atRule.params)
      }
    })

    variableFamilies.forEach((family) => {
      expect(topLevelIncludes).toContain(`${family}.variables`)

      if (definesResponsiveVariables(family)) {
        expect(responsiveIncludes).toContain(`${family}.responsive-variables`)
      }
    })
  })

  it('matches family-list.json exactly against the family partials on disk', () => {
    // The filesystem, not family-list.json, is the source of truth: the
    // token values actually live in src/families/*.scss. This asserts
    // family-list.json (what rollup.config.mjs and this spec both read)
    // has neither a stale entry nor a missing one, independently of
    // whatever family-list.json itself claims.
    const familiesOnDisk = fs
      .readdirSync(FAMILIES_DIR)
      .filter((file) => file.endsWith('.scss'))
      .map((file) => file.replace(/\.scss$/, ''))
      .sort()

    expect([...variableFamilies].sort()).toEqual(familiesOnDisk)
  })

  it('keeps family-list.json as the single source rollup.config.mjs builds from', () => {
    const rollupConfig = fs.readFileSync(
      path.resolve(SRC_DIR, '..', 'rollup.config.mjs'),
      'utf8'
    )

    expect(rollupConfig).toMatch(/require\(['"]\.\/family-list\.json['"]\)/)
  })
})
