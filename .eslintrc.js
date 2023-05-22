// @ts-check

const configuration = {
  root: true,
  parser: '@lucaswinningham-eslint/eslint-parser',
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
  plugins: [
    '@lucaswinningham-eslint',
  ],
  extends: [
    'plugin:@lucaswinningham-eslint/eslint-recommended',
    'plugin:@lucaswinningham-eslint/react',
    'plugin:@lucaswinningham-eslint/typescript',
  ],
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
