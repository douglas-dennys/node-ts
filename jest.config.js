module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/core/*.ts', 'src/middleware/*.ts', 'src/services/*.ts', 'src/utils/*.ts'],
  coverageDirectory: "__tests__/coverage",
  coverageReporters: [
    "text",
    "lcov",
  ],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
