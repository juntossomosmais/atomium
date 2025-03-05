const baseConfig = require('@juntossomosmais/linters/eslint.config.js')

module.exports = {
  ...baseConfig,
  root: true,
  settings: {
    'import/resolver': {
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
  ],
}
