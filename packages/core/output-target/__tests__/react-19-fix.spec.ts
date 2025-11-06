import {
  Compiler,
  CompilerSystem,
  createCompiler,
  loadConfig,
} from '@stencil/core/compiler'
import { createNodeLogger, createNodeSys } from '@stencil/core/sys/node'
import { reactOutputTarget } from '@stencil/react-output-target'
import fs from 'fs'
import { react19FixOutputTarget } from '../react-19-fix'

describe.skip('React 19 Fix', () => {
  let compiler: Compiler
  let sys: CompilerSystem

  beforeAll(async () => {
    const logger = createNodeLogger()
    sys = createNodeSys({ process })

    const validated = await loadConfig({
      logger,
      sys,
      config: {
        _isTesting: true,
        outputTargets: [
          reactOutputTarget({
            proxiesFile: './output-target/index.ts',
          }),
          react19FixOutputTarget({
            createOverlayComponentFile:
              './react-component-lib/createOverlayComponent.tsx',
            utilsIndexFile: './react-component-lib/utils/index.tsx',
          }),
        ],
      },
    })

    compiler = await createCompiler(validated.config)
  })

  afterAll(async () => {
    await fs.promises.rm('./output-target/react-component-lib', {
      recursive: true,
    })
    await compiler.destroy()
  })

  it('should apply React 19 fix to createOverlayComponent.tsx', async () => {
    jest
      .spyOn(sys, 'writeFile')
      .mockImplementation(jest.fn().mockResolvedValue(true))

    const fsSpyOn = jest
      .spyOn(fs.promises, 'writeFile')
      .mockImplementation(jest.fn().mockResolvedValue(true))

    await compiler.build()

    expect(fsSpyOn).toHaveBeenCalledWith(
      expect.any(String),
      expect.stringContaining(
        'const overlayProps = { ...props, forwardedRef: ref } as any;'
      )
    )
  })

  it('should apply React 19 fix to utils/index.tsx', async () => {
    jest
      .spyOn(sys, 'writeFile')
      .mockImplementation(jest.fn().mockResolvedValue(true))

    const fsSpyOn = jest
      .spyOn(fs.promises, 'writeFile')
      .mockImplementation(jest.fn().mockResolvedValue(true))

    await compiler.build()

    expect(fsSpyOn).toHaveBeenCalledWith(
      expect.any(String),
      expect.stringContaining(
        'return React.forwardRef(forwardRef as any) as any;'
      )
    )
  })
})
