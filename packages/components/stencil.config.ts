import { Config } from '@stencil/core'
import { reactOutputTarget } from '@stencil/react-output-target'
import { vueOutputTarget } from '@stencil/vue-output-target'

export const config: Config = {
  namespace: 'atomium',
  globalScript: 'src/global/global.ts',
  globalStyle: 'src/global/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'assets' }],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    vueOutputTarget({
      componentCorePackage: '@my-design-system/core',
      proxiesFile: 'dist/vue/index.js',
      includeDefineCustomElements: true,
    }),
    reactOutputTarget({
      componentCorePackage: '@my-design-system/core',
      proxiesFile: 'dist/react/index.js',
      includeDefineCustomElements: true,
    }),
  ],
}
