module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['scripts/*.ts', '!scripts/*.spec.ts'],
}
