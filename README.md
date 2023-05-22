# Bare React App

## Custom Linting

First, create [your own `eslint` plugin and parser]().

First,

```sh
yarn add @lucaswinningham-eslint/eslint-plugin @lucaswinningham-eslint/eslint-parser eslint --dev
touch .eslintrc.js
```

`.eslintrc.js`

```js
// @ts-check

const configuration = {
  root: true,
  parser: '@lucaswinningham-eslint/parser',
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

```

`package.json`

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint '**/*' --config .eslintrc.js",
    "lint:fix": "yarn lint --fix",
    ...
  },
  ...
}

```

then,

```sh
yarn lint
```

and we should see

```sh
yarn run v<YARN_VERSION>
$ ./node_modules/.bin/eslint '**/*' --config .eslintrc.js

/path/to/.eslintrc.js
  0:0  error  Parsing error: ESLint was configured to run on `<tsconfigRootDir>/.eslintrc.js` using `parserOptions.project`: /path/to/tsconfig.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file

✖ 1 problem (1 error, 0 warnings)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Let's add `eslintrc.js` to `tsconfig.json`'s `include`:

`tsconfig.json`

```json
{
  "compilerOptions": {
    ...
  },
  "include": [
    ".eslintrc.js",
    ...
  ]
}

```

Now when we run,

```sh
yarn lint
```

and we should see

```sh
yarn run v<YARN_VERSION>
$ ./node_modules/.bin/eslint '**/*' --config .eslintrc.js
✨  Done in <SECONDS>s.
```
