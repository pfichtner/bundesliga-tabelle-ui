module.exports = {
  preset: 'jest-preset-angular',
  testMatch: ['**/+(*.)+(spec).(pact).(ts)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
};
