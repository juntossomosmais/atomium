import {
  Compiler,
  CompilerSystem,
  createCompiler,
  loadConfig,
} from '@stencil/core/compiler'
import { createNodeLogger, createNodeSys } from '@stencil/core/sys/node'
import { reactOutputTarget } from '@stencil/react-output-target'
import fs from 'fs'
import { reactBooleanFixOutputTarget } from './react-boolean'

describe('React Boolean Fix', () => {
  let compiler: Compiler
  let sys: CompilerSystem

  beforeAll(async () => {
    // https://stenciljs.com/docs/compiler-api#createcompiler
    const logger = createNodeLogger({ process })
    sys = createNodeSys({ process })

    const validated = await loadConfig({
      logger,
      sys,
      config: {
        _isTesting: true,
        outputTargets: [
          reactOutputTarget({
            // We are informing a file that does not exist to create the react-library inside that folder.
            proxiesFile: './output-target/index.ts',
          }),
          reactBooleanFixOutputTarget({
            attachPropsFile: './react-component-lib/utils/attachProps.ts',
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

  it('should apply fix correctly in react library', async () => {
    jest
      .spyOn(sys, 'writeFile')
      .mockImplementation(jest.fn().mockResolvedValue(true))

    const fsSpyOn = jest
      .spyOn(fs.promises, 'writeFile')
      .mockImplementation(jest.fn().mockResolvedValue(true))

    await compiler.build()

    expect(fsSpyOn).toHaveBeenCalledWith(
      expect.any(String),
      expect.stringContaining("if (propType === 'boolean')")
    )
  })
})
