import fs from 'fs'

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue(''),
  writeFileSync: jest.fn(),
}))

// Regression guard for the entry-point check in ../index.ts.
describe('generate-tokens entry', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('writes nothing when imported rather than run as the entry point', () => {
    jest.isolateModules(() => {
      require('..')
    })

    expect(fs.writeFileSync).not.toHaveBeenCalled()
  })

  it('still exposes the values the build and the other generators read', () => {
    jest.isolateModules(() => {
      const { TOKENS_DIR, variablePrefixes } = require('..')

      expect(TOKENS_DIR).toMatch(/dist[\\/]tokens\.css$/)
      expect(variablePrefixes).toContain('color')
      expect(variablePrefixes).toContain('elevation')
    })
  })

  // The other half of the guard: skipping the work on import must not have made the
  // build a no-op. This is what the `require.main === module` branch calls.
  it('writes both token files when the generation is invoked directly', () => {
    jest.isolateModules(() => {
      const { generateTokens } = require('..')

      generateTokens()
    })

    const written = (fs.writeFileSync as jest.Mock).mock.calls.map(
      ([target]) => target as string
    )

    expect(written).toHaveLength(2)
    expect(written.some((target) => target.endsWith('index.ts'))).toBe(true)
    expect(written.some((target) => target.endsWith('tokens.json'))).toBe(true)
  })
})
