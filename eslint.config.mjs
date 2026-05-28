import base from '@juntossomosmais/linters/eslint-config/flat/base.mjs'
import storybook from 'eslint-plugin-storybook'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '**/coverage/**',
      '**/storybook-static/**',
      '**/*.d.ts',
      'packages/core/output-target/**',
      'packages/core/loader/**',
      'packages/core/react/**',
      'packages/core/vue/**',
      'packages/react/**',
      'packages/vue/**',
      '.commitlintrc.js',
      '.prettierrc.js',
    ],
  },

  ...base,

  ...storybook.configs['flat/recommended'],

  {
    // The shared base only enables non-type-aware TS rules. Disabling `project`
    // avoids requiring every TS file to belong to a tsconfig.
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: { parserOptions: { project: false } },
    rules: {
      // The base config keeps the Stencil `h` import alive. Also accept the
      // conventional `_`-prefix for intentionally unused arguments.
      '@typescript-eslint/no-unused-vars': [
        2,
        { varsIgnorePattern: '^h$', argsIgnorePattern: '^_' },
      ],
    },
  },

  {
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        typescript: { project: './tsconfig.base.json' },
      },
    },
  },

  {
    files: ['**/*.spec.{js,ts,tsx}'],
    rules: {
      'no-console': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/unused-import': 'off',
    },
  },

  {
    files: ['**/scripts/**'],
    rules: { 'no-console': 'off' },
  },

  {
    files: ['**/*.tsx'],
    rules: { 'sonarjs/unused-import': 'off' },
  },

  {
    // Stories are example code: console, any, slow regex, and nested
    // assignments are routine teaching patterns rather than real bugs.
    files: ['**/stories/**', '**/*.stories.{ts,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'sonarjs/slow-regex': 'off',
      'sonarjs/no-nested-assignment': 'off',
    },
  },

  {
    // Storybook config files need `any` for the framework typings.
    files: ['**/.storybook/**'],
    rules: { '@typescript-eslint/no-explicit-any': 'off' },
  },
]
