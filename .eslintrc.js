const path = require('path')

const config = {
  env: {
    browser: true,
    node: true,
  },
  // extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'standard', 'prettier', 'jest-enzyme'],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-body-style': [
      0,
      'never',
    ],
    'max-len': [
      2,
      140,
    ],
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: {
          multiline: true,
        },
      },
    ],
    'consistent-return': 0,
    'no-param-reassign': 0,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    extraFileExtensions: [".ts", ".tsx"],
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: path.resolve(__dirname, 'packages'),
      },
    },
  },
}

module.exports = config
