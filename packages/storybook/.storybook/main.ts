module.exports = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../**/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/theming',
  ],
  framework: '@storybook/html',
}
