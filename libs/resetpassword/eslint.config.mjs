import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.js';

const config = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
];

export default config;
