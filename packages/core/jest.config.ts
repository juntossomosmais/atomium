module.exports = {
  preset: '@stencil/core/testing',
  globals: {
    IONIC_CORE_ENTRY: 'node_modules/@ionic/core/dist/esm/index.js',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@ionic/core$': '<rootDir>/node_modules/@ionic/core/dist/esm/index.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!@ionic|@stencil|@capacitor)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    'output-target/**/*.{js,jsx,ts,tsx}',
    '!src/**/stories/**',
    '!src/**/*.mock.ts',
    '!src/**/*.spec.ts',
    '!output-target/**/*.spec.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      statements: 80,
    },
  },
}
