import type { StorybookConfig } from '@storybook/web-components-webpack5'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/core/src/**/*.core.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/tokens/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/theming',
    '@storybook/addon-mdx-gfm',
  ],
  staticDirs: ['../../../packages/icons/svg'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        react: {
          title: 'React (localhost:7006)',
          url: 'http://localhost:7006',
        },
      }
    }
    return {
      react: {
        title: 'React Library',
        url: 'react',
        expanded: false,
      },
    }
  },
}

export default config
