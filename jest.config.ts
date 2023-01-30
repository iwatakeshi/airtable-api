// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   transform: {
//     '^.+\\.ts?$': 'ts-jest',
//   },
//   transformIgnorePatterns: ['<rootDir>/node_modules/'],
//   globals: {
//     'ts-jest': {
//       useESM: true,
//     },
//   },
// }

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
};