// @ts-check

const configuration = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    '**/*.html',
    '**/*.ico',
    '**/*.json',
    '**/*.lock',
    '**/*.log',
    '**/*.md',
    '**/*.yml',
  ],
  // Rule customization
  rules: {
  },
};

module.exports = configuration;
