const umiPrettierConfs = require('@umijs/fabric').prettier
module.exports = {
  ...umiPrettierConfs,
  stylelintIntegration: true,
  semi: false,
  tabWidth: 2,
  jsxBracketSameLine: true,
  disableLanguages: [],
  printWidth: 120,
  singleQuote: true,
  useEditorConfig: false,
}
