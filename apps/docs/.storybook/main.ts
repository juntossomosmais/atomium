const config = {
  stories: [
    '../stories/*.stories.@(js|jsx|ts|tsx|mdx)',
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
  framework: {
    name: '@storybook/html-webpack5',
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
        url: 'juntossomosmais.github.io/atomium/react',
        expanded: false,
      },
    }
  },
}

export default config
