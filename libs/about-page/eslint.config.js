import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/about/*.ts', '**/about/*.tsx', '**/about/*.js', '**/about/*.jsx'],
    rules: {
      'no-console': 'warn',
      'consistent-return': 'error',
    },
  },
];
