// const path = require('path')

module.exports = {
  // preset: 'ts-jest',
  preset: 'ts-jest/presets/js-with-ts',
  collectCoverage: false, // 收集测试时的覆盖率信息
  // coverageDirectory: path.resolve(__dirname, './coverage'), // 指定输出覆盖信息文件的目录
  collectCoverageFrom: [ // 指定收集覆盖率的目录文件，只收集每个包的lib目录，不收集打包后的dist目录 
    "packages/*/src/**/*.{js,mjs,ts,tsx}",
    '!*./libs/**',
    '!**/test/**',
    '!**/__test__/**',
    "!**/node_modules/**",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    './libs/',
    '/test/',
    '/__test__/',
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
  // testEnvironment: 'node',
  testEnvironment: 'jsdom',
  testRegex: "(.*/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    // '^.+\\.(j|t)sx?$': 'ts-jest',
    // "^.+\\.[t|j]sx?$": "babel-jest"
  },
  // setupFilesAfterEnv: [
  //   '@testing-library/react/cleanup-after-each',
  //   '@testing-library/jest-dom/extend-expect',
  // ],
  transformIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageThreshold: {
    global: { branches: 100, functions: 100, lines: 100, statements: 100 }
  },
  globals: {
    navigator: { onLine: false }
  }
}

