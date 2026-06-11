import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: [
    '../stories/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../packages/core/src/**/*.vue.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {},
  },

  async viteFinal(config) {
    // Ensure Vue story files use standard JSX transform, not Stencil's
    config.esbuild = {
      ...config.esbuild,
      jsx: 'preserve',
    }

    // The vue3-vite framework aliases `vue` to the browser esm-bundler build,
    // which also rewrites the `vue/server-renderer` subpath imported by
    // @stencil/vue-output-target/runtime. Pin the subpath first so it resolves
    // to the real module (aliases are matched in order).
    const serverRenderer = {
      find: /^vue\/server-renderer$/,
      replacement: fileURLToPath(import.meta.resolve('vue/server-renderer')),
    }
    const alias = config.resolve?.alias

    config.resolve = {
      ...config.resolve,
      alias: Array.isArray(alias)
        ? [serverRenderer, ...alias]
        : { 'vue/server-renderer': serverRenderer.replacement, ...alias },
    }

    return config
  },
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}
