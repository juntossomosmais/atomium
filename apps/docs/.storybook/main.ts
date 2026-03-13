import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import type { StorybookConfig } from '@storybook/web-components-vite'

function getStorybookRefs(configType: string) {
  if (configType === 'DEVELOPMENT') {
    return {
      react: {
        title: 'React (localhost:7006)',
        url: 'http://localhost:7006',
      },
      vue: {
        title: 'Vue (localhost:8006)',
        url: 'http://localhost:8006',
      },
    }
  }
  return {
    react: {
      title: 'React Library',
      url: 'react',
      expanded: false,
    },
    vue: {
      title: 'Vue Library',
      url: 'vue',
      expanded: false,
    },
  }
}

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../packages/core/src/**/*.core.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../packages/tokens/stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],

  addons: [getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("@storybook/addon-docs")],
  staticDirs: ['../../../packages/icons/svg'],

  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },

  refs: (config, { configType = '' }) => {
    return getStorybookRefs(configType)
  }
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
