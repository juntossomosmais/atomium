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
}
