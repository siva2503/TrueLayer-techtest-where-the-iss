/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
  clearMocks: true,
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/support/setup.ts'],
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      'pageTitle': 'TrueLayer - WhereTheIss- Test Report'
    }]
  ]
}
