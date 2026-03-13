/**
 * You can read about the need for this file at ADR.
 * Link: https://juntossomosmais.github.io/atomium/?path=/docs/docs-architecture-decision-records-adr-0016-why-react-19-compatibility-patch--docs
 */

import {
  BuildCtx,
  CompilerCtx,
  Config,
  OutputTargetCustom,
} from '@stencil/core/internal'
import fs from 'fs'
import path from 'path'

interface IReact19FixOutputTargetOptions {
  createOverlayComponentFile: string
  utilsIndexFile: string
}

const messages = {
  start: 'Generating React 19 compatibility fix',
  finish: 'Generate React 19 compatibility fix finished',
}

const patchOverlayComponent = async (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    return
  }

  let content = await fs.promises.readFile(filePath, { encoding: 'utf-8' })

  // Check if already patched
  const isPatched = content.includes(
    'const overlayProps = { ...props, forwardedRef: ref } as any;'
  )
  if (isPatched) {
    return
  }

  const patchedContent = content.replace(
    /return React\.forwardRef<OverlayType, Props>\(\(props, ref\) => \{[\s\S]*?return <Overlay \{\.\.\.props\} forwardedRef=\{ref\} \/>;[\s\S]*?\}\);/,
    `return React.forwardRef<OverlayType, Props>((props, ref) => {
    const overlayProps = { ...props, forwardedRef: ref } as any;
    return <Overlay {...overlayProps} />;
  }) as any;`
  )

  await fs.promises.writeFile(filePath, patchedContent)
}

const patchUtilsIndex = async (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    return
  }

  let content = await fs.promises.readFile(filePath, { encoding: 'utf-8' })

  // Check if already patched
  const isPatched = content.includes(
    'return React.forwardRef(forwardRef as any) as any;'
  )
  if (isPatched) {
    return
  }

  const patchedContent = content.replace(
    /return React\.forwardRef\(forwardRef\);/,
    'return React.forwardRef(forwardRef as any) as any;'
  )

  await fs.promises.writeFile(filePath, patchedContent)
}

const runReact19FixOutputTarget = async (
  outputTarget: IReact19FixOutputTargetOptions
) => {
  const overlayFilePath = path.resolve(
    __dirname,
    outputTarget.createOverlayComponentFile
  )
  const utilsFilePath = path.resolve(__dirname, outputTarget.utilsIndexFile)

  await patchOverlayComponent(overlayFilePath)
  await patchUtilsIndex(utilsFilePath)
}

const waitForReactLibraryGeneration = (
  compilerCtx: CompilerCtx
): Promise<void> => {
  return new Promise((resolve) => {
    compilerCtx.events.on('buildLog', (log) => {
      const isFinishedTranspileReact = log.messages.some((message) =>
        message.includes('generate react-library finished')
      )

      if (isFinishedTranspileReact) {
        resolve()
      }
    })
  })
}

export const react19FixOutputTarget = (
  outputTarget: IReact19FixOutputTargetOptions
): OutputTargetCustom => ({
  type: 'custom',
  name: 'react-19-fix',
  generator: async (
    _config: Config,
    compilerCtx: CompilerCtx,
    buildCtx: BuildCtx
  ) => {
    const timespan = buildCtx.createTimeSpan(messages.start, true)

    await waitForReactLibraryGeneration(compilerCtx)
    await runReact19FixOutputTarget(outputTarget)

    timespan.finish(messages.finish)
  },
})
