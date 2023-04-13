import { Config } from '@stencil/core'
import { OutputTargetCustom } from '@stencil/core/internal'
import { sass } from '@stencil/sass'

import { reactOutputTarget } from '@stencil/react-output-target'
import { vueOutputTarget } from '@stencil/vue-output-target'
import * as fs from 'fs'
import * as path from 'path'

const componentsDir = path.join(__dirname, 'src', 'components')

const componentOutputTargets = fs
  .readdirSync(componentsDir)
  .filter((file) => fs.statSync(path.join(componentsDir, file)).isDirectory())
  .map((componentDir) => ({
    type: 'dist',
    esm: {
      dir: `dist/${componentDir}/esm`,
    },
    injectGlobalPaths: [
      `${componentsDir}/${componentDir}/${componentDir}.scss`,
    ],
    empty: true,
    minify: true,
  }))

export const config: Config = {
  namespace: 'atomium',
  plugins: [
    sass({
      injectGlobalPaths: ['../../node_modules/@ionic/core/css/core.css'],
    }),
  ],
  globalScript: 'src/global/global.ts',
  globalStyle: 'src/global/global.scss',
  outputTargets: [
    ...componentOutputTargets,
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'dist',
      esmLoaderPath: 'loader',
    },
    vueOutputTarget({
      componentCorePackage: '@atomium/core/dist',
      proxiesFile: 'dist/vue/index.ts',
    }),
    reactOutputTarget({
      componentCorePackage: '@atomium/core/dist',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
      loaderDir: 'loader',
      includePolyfills: true,
    }),
  ] as OutputTargetCustom[],
}
