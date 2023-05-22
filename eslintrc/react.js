// @ts-check

/* eslint-disable  @typescript-eslint/no-var-requires */

const { defineConfig } = require('eslint-define-config');

const { error } = require('./types');

const configuration = defineConfig({
  plugins: [
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'react/function-component-definition': [
      error,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      error,
      {
        extensions: [
          '.tsx',
        ],
      },
    ],
  },
});

const {
  plugins: configurationPlugins,
  settings: configurationSettings,
  extends: configurationExtensions,
  rules: configurationRules,
} = configuration;

/** @type { import('./types').Plugins } */
const plugins = configurationPlugins ?? [];

/** @type { import('./types').Settings } */
const settings = configurationSettings ?? {};

/** @type { import('./types').Extensions } */
const extensions = configurationExtensions ?? [];

/** @type { import('./types').Rules } */
const rules = configurationRules ?? {};

module.exports = { plugins, settings, extensions, rules };
