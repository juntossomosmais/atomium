module.exports = {
  stories: [
    '../stories/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../packages/core/src/**/*.react.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/theming',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-webpack5-compiler-babel',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
}
