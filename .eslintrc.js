const baseConfig = require('@juntossomosmais/linters/eslint.config.js')

module.exports = {
  ...baseConfig,
  root: true,

  settings: {
    ...baseConfig.settings,
    'import/resolver': {
      ...baseConfig.settings?.['import/resolver'],
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        project: './tsconfig.base.json',
      },
    },
  },

  overrides: [
    ...baseConfig.overrides,
    {
      files: ['**/*.spec.{js,ts,tsx}'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/unused-import': 'off',
      },
    },
    {
      files: ['**/scripts/**'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'sonarjs/unused-import': 'off',
      },
    },
    {
      // Stencil components use 'class' (not 'className') as they compile to standard web components
      files: ['packages/core/src/components/**/*.tsx'],
      rules: {
        'react/no-unknown-property': ['error', { ignore: ['class'] }],
      },
    },
  ],

  extends: ['plugin:storybook/recommended'],
}
