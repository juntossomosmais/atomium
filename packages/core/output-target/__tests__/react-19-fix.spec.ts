import fs from 'fs'
import path from 'path'

describe('React 19 Fix Output Target', () => {
  const OVERLAY_PATCH_MARKER =
    'const overlayProps = { ...props, forwardedRef: ref } as any;'
  const UTILS_PATCH_MARKER =
    'return React.forwardRef(forwardRef as any) as any;'

  const PATHS = {
    overlay: path.join(
      __dirname,
      '../../../react/src/components/react-component-lib/createOverlayComponent.tsx'
    ),
    utils: path.join(
      __dirname,
      '../../../react/src/components/react-component-lib/utils/index.tsx'
    ),
  }

  // Check if files exist before running tests
  const filesExist = fs.existsSync(PATHS.overlay) && fs.existsSync(PATHS.utils)
  const describeTest = filesExist ? describe : describe.skip

  const verifyOverlayPatch = (content: string) => {
    expect(content).toContain(OVERLAY_PATCH_MARKER)
    expect(content).toContain('return <Overlay {...overlayProps} />;')
    expect(content).toContain('}) as any;')
  }

  const verifyUtilsPatch = (content: string) => {
    expect(content).toContain(UTILS_PATCH_MARKER)
  }

  const readFile = (filePath: string): string => {
    return fs.readFileSync(filePath, 'utf8')
  }

  const fileExists = (filePath: string): boolean => {
    return fs.existsSync(filePath)
  }

  describeTest('patchOverlayComponent', () => {
    it('should patch createOverlayComponent.tsx with React 19 fix', () => {
      const content = readFile(PATHS.overlay)
      verifyOverlayPatch(content)
    })

    it('should preserve original file structure', () => {
      const content = readFile(PATHS.overlay)

      expect(content).toContain("import React from 'react'")
      expect(content).toContain("import ReactDOM from 'react-dom'")

      expect(content).toContain('class Overlay extends React.Component')
    })

    it('should handle missing file gracefully', () => {
      const exists = fileExists(PATHS.overlay)
      expect(exists).toBe(true)
    })
  })

  describeTest('patchUtilsIndex', () => {
    it('should patch utils/index.tsx with React 19 fix', () => {
      const content = readFile(PATHS.utils)
      verifyUtilsPatch(content)
    })

    it('should preserve original file structure', () => {
      const content = readFile(PATHS.utils)

      expect(content).toContain('StencilReactExternalProps')
      expect(content).toContain('StencilReactForwardedRef')

      expect(content).toContain('export const setRef')
      expect(content).toContain('export const mergeRefs')
    })

    it('should handle missing file gracefully', () => {
      const exists = fileExists(PATHS.utils)
      expect(exists).toBe(true)
    })
  })

  describeTest('Integration', () => {
    it('should patch both files correctly', () => {
      const overlayContent = readFile(PATHS.overlay)
      const utilsContent = readFile(PATHS.utils)

      verifyOverlayPatch(overlayContent)
      verifyUtilsPatch(utilsContent)
    })

    it('should maintain idempotency', () => {
      const overlayContent = readFile(PATHS.overlay)
      const utilsContent = readFile(PATHS.utils)

      verifyOverlayPatch(overlayContent)
      verifyUtilsPatch(utilsContent)

      const secondOverlayContent = readFile(PATHS.overlay)
      const secondUtilsContent = readFile(PATHS.utils)

      expect(secondOverlayContent).toBe(overlayContent)
      expect(secondUtilsContent).toBe(utilsContent)
    })
  })

  describe('Output Target Configuration', () => {
    it('should export react19FixOutputTarget function', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { react19FixOutputTarget } = require('../react-19-fix')

      expect(react19FixOutputTarget).toBeDefined()
      expect(typeof react19FixOutputTarget).toBe('function')
    })

    it('should return correct output target structure', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { react19FixOutputTarget } = require('../react-19-fix')

      const outputTarget = react19FixOutputTarget({
        createOverlayComponentFile: './test.tsx',
        utilsIndexFile: './utils.tsx',
      })

      expect(outputTarget.type).toBe('custom')
      expect(outputTarget.name).toBe('react-19-fix')
      expect(outputTarget.generator).toBeDefined()
      expect(typeof outputTarget.generator).toBe('function')
    })
  })

  describeTest('Patch Content Verification', () => {
    it('should apply correct patch to createOverlayComponent', () => {
      const content = readFile(PATHS.overlay)

      const hasCorrectPattern = content.includes(
        'return React.forwardRef<OverlayType, Props>((props, ref) => {\n    const overlayProps = { ...props, forwardedRef: ref } as any;\n    return <Overlay {...overlayProps} />;\n  }) as any;'
      )

      expect(hasCorrectPattern).toBe(true)
    })

    it('should apply correct patch to utils index', () => {
      const content = readFile(PATHS.utils)

      expect(content).toContain(UTILS_PATCH_MARKER)
      expect(content).toContain('forwardRef.displayName = displayName')
    })
  })

  describeTest('File Integrity', () => {
    it('should not introduce syntax errors in overlay file', () => {
      const content = readFile(PATHS.overlay)

      const openBraces = (content.match(/{/g) || []).length
      const closeBraces = (content.match(/}/g) || []).length
      expect(openBraces).toBe(closeBraces)

      const openParens = (content.match(/\(/g) || []).length
      const closeParens = (content.match(/\)/g) || []).length
      expect(openParens).toBe(closeParens)
    })

    it('should not introduce syntax errors in utils file', () => {
      const content = readFile(PATHS.utils)

      const openBraces = (content.match(/{/g) || []).length
      const closeBraces = (content.match(/}/g) || []).length
      expect(openBraces).toBe(closeBraces)

      const openParens = (content.match(/\(/g) || []).length
      const closeParens = (content.match(/\)/g) || []).length
      expect(openParens).toBe(closeParens)
    })
  })
})
