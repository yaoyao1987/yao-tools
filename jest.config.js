module.exports = {
  verbose: true,
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: "testcoverage",
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  testURL: 'http://localhost',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  preset: "ts-jest/presets/js-with-ts",
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
};