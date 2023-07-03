module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'scripts/*.ts',
    '!scripts/*.spec.ts',
    '!src/**/stories/**',
    '!src/**/*.mock.ts',
    '!src/**/*.spec.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      statements: 80,
    },
  },
}
