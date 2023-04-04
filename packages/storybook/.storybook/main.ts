module.exports = {
  stories: [
    '../stories/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../library/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../tokens/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-links',
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
