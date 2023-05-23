// @ts-check

const configuration = {
  root: true,
  parser: '@lucaswinningham/eslint-parser',
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
  plugins: [
    '@lucaswinningham',
  ],
  extends: [
    'plugin:@lucaswinningham/eslint-recommended',
    'plugin:@lucaswinningham/react',
    'plugin:@lucaswinningham/typescript',
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
