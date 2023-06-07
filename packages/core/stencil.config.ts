import { Config } from '@stencil/core'
import { OutputTargetCustom } from '@stencil/core/internal'
import { sass } from '@stencil/sass'

import { reactOutputTarget } from '@stencil/react-output-target'
import { vueOutputTarget } from '@stencil/vue-output-target'

export const config: Config = {
  namespace: 'core',
  plugins: [
    sass({
      injectGlobalPaths: ['../../node_modules/@ionic/core/css/core.css'],
    }),
  ],
  globalScript: 'src/global/global.ts',
  globalStyle: 'src/global/global.scss',
  outputTargets: [
    vueOutputTarget({
      componentCorePackage: '@juntossomosmais/atomium',
      proxiesFile: '../vue/src/components/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    reactOutputTarget({
      componentCorePackage: '@juntossomosmais/atomium',
      proxiesFile: '../react/src/components/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
  ] as OutputTargetCustom[],
}
