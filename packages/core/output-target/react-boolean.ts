/**
 * You can read about the need for this file at ADR.
 * Link: https://juntossomosmais.github.io/atomium/?path=/docs/docs-architecture-decision-records-adr-0010-why-do-we-need-react-fix--docs
 */

import {
  BuildCtx,
  CompilerCtx,
  Config,
  OutputTargetCustom,
} from '@stencil/core/internal'
import fs from 'fs'
import path from 'path'

interface IReactBooleanOutputTargetOptions {
  attachPropsFile: string
}

const messages = {
  start: 'generate react boolean fix started',
  finish: 'generate react boolean fix finished',
}

const runReactBooleanFixOutputTarget = async (
  outputTarget: IReactBooleanOutputTargetOptions
) => {
  const attachPropsFilePath = path.resolve(
    __dirname,
    outputTarget.attachPropsFile
  )

  let attachPropsContent = await fs.promises.readFile(attachPropsFilePath, {
    encoding: 'utf-8',
  })

  attachPropsContent = attachPropsContent.replace(
    "if (propType === 'string') {",
    "if (propType === 'boolean') { if (newProps[name] === true) { node.setAttribute(camelToDashCase(name), ''); } else { node.removeAttribute(camelToDashCase(name)); } } else if (propType === 'string') {"
  )

  await fs.promises.writeFile(attachPropsFilePath, attachPropsContent)
}

export const reactBooleanFixOutputTarget = (
  outputTarget: IReactBooleanOutputTargetOptions
): OutputTargetCustom => ({
  type: 'custom',
  name: 'react-boolean-fix',
  generator: async (
    _config: Config,
    compilerCtx: CompilerCtx,
    buildCtx: BuildCtx
  ) => {
    const timespan = buildCtx.createTimeSpan(messages.start, true)

    // Wait for react finished to start boolean fix.
    await new Promise((resolve) => {
      compilerCtx.events.on('buildLog', (log) => {
        if (
          log.messages.findIndex((elm) =>
            elm.includes('generate react-library finished')
          ) !== -1
        ) {
          resolve(true)
        }
      })
    })

    await runReactBooleanFixOutputTarget(outputTarget)

    timespan.finish(messages.finish)
  },
})
