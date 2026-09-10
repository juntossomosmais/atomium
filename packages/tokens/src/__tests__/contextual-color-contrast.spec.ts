import fs from 'fs'
import path from 'path'

import type { Declaration } from 'postcss'
import { parse } from 'postcss-scss'

const SRC_DIR = path.resolve(__dirname, '..')
const COLORS_FILE = path.join(SRC_DIR, 'families', 'colors.scss')

const CONTEXTUAL_FAMILIES = ['success', 'warning', 'info', 'error'] as const
const STEPS = ['dark-1', 'regular', 'light-1', 'light-2'] as const

type ContextualFamily = (typeof CONTEXTUAL_FAMILIES)[number]
type Step = (typeof STEPS)[number]

/**
 * Reads every `--color-contextual-<family>-<step>` custom property straight
 * out of the real scss source, so this test breaks the moment someone edits
 * a token value rather than only when someone edits this test.
 */
const readContextualTokens = (): Record<
  ContextualFamily,
  Record<Step, string>
> => {
  const root = parse(fs.readFileSync(COLORS_FILE, 'utf8'))
  const tokens = {} as Record<ContextualFamily, Record<Step, string>>

  root.walkDecls((decl: Declaration) => {
    const match = decl.prop.match(
      /^--color-contextual-(success|warning|info|error)-(dark-1|regular|light-1|light-2)$/
    )

    if (!match) return

    const [, family, step] = match as [string, ContextualFamily, Step]

    tokens[family] = tokens[family] ?? ({} as Record<Step, string>)
    tokens[family][step] = decl.value.trim()
  })

  return tokens
}

// WCAG 2.1 sRGB relative luminance and contrast ratio.
const hexToRgb = (hex: string): [number, number, number] => {
  const normalized = hex.replace('#', '')
  const channels = [0, 2, 4].map(
    (i) => parseInt(normalized.slice(i, i + 2), 16) / 255
  )

  return channels as [number, number, number]
}

const linearize = (channel: number) =>
  channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4

const relativeLuminance = ([r, g, b]: [number, number, number]) =>
  0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)

const contrastRatio = (hexA: string, hexB: string) => {
  const [lighter, darker] = [
    relativeLuminance(hexToRgb(hexA)),
    relativeLuminance(hexToRgb(hexB)),
  ].sort((a, b) => b - a)

  return (lighter + 0.05) / (darker + 0.05)
}

const WHITE = '#ffffff'

// The contract each step is expected to hold, documented alongside the
// tokens in stories/1_Colors.mdx.
const DARK_1_MIN_CONTRAST_ON_WHITE = 7
const REGULAR_MIN_CONTRAST_ON_WHITE = 4.5
const REGULAR_MIN_CONTRAST_ON_LIGHT_2 = 4.5

describe('contextual color contrast contract', () => {
  const tokens = readContextualTokens()

  it.each(CONTEXTUAL_FAMILIES)('%s has all four steps defined', (family) => {
    STEPS.forEach((step) => {
      expect(tokens[family][step]).toMatch(/^#[0-9a-f]{6}$/i)
    })
  })

  it.each(CONTEXTUAL_FAMILIES)(
    `%s-dark-1 meets at least ${DARK_1_MIN_CONTRAST_ON_WHITE}:1 against white`,
    (family) => {
      const ratio = contrastRatio(tokens[family]['dark-1'], WHITE)

      expect(ratio).toBeGreaterThanOrEqual(DARK_1_MIN_CONTRAST_ON_WHITE)
    }
  )

  it.each(CONTEXTUAL_FAMILIES)(
    `%s-regular meets at least ${REGULAR_MIN_CONTRAST_ON_WHITE}:1 against white`,
    (family) => {
      const ratio = contrastRatio(tokens[family].regular, WHITE)

      expect(ratio).toBeGreaterThanOrEqual(REGULAR_MIN_CONTRAST_ON_WHITE)
    }
  )

  it.each(CONTEXTUAL_FAMILIES)(
    `%s-regular meets at least ${REGULAR_MIN_CONTRAST_ON_LIGHT_2}:1 against its own -light-2`,
    (family) => {
      const ratio = contrastRatio(
        tokens[family].regular,
        tokens[family]['light-2']
      )

      expect(ratio).toBeGreaterThanOrEqual(REGULAR_MIN_CONTRAST_ON_LIGHT_2)
    }
  )
})
