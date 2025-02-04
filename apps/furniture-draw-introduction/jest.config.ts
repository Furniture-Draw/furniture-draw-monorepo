import { getJestProjectsAsync } from '@nx/jest';

const jestConfig = async () => ({
  preset: '../../jest.preset.mjs',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  projects: await getJestProjectsAsync(),
});

export default jestConfig;
