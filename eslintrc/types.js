// @ts-check

/** @typedef { import('eslint-define-config').Plugin[] } Plugins */
/** @typedef { import('eslint-define-config').Settings } Settings */
/** @typedef { import('eslint-define-config').Extends } Extensions */
/** @typedef { import('eslint-define-config').Rules } Rules */

/** @typedef { import('eslint-define-config/src/rules/rule-severity').RuleLevel } RuleLevel */

/** @type { RuleLevel } */
const off = 'off';

/** @type { RuleLevel } */
const warn = 'warn';

/** @type { RuleLevel } */
const error = 'error';

module.exports = { off, warn, error };
