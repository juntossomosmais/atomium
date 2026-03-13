import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
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
    return config
  },
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}
