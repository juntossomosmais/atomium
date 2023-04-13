module.exports = {
  stories: [
    '../stories/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/core/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
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
}
