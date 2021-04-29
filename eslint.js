module.exports = {
  extends: [
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/README.md#configuration
    'plugin:react/recommended',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#configuration
    'plugin:@typescript-eslint/recommended',
    // https://github.com/prettier/eslint-config-prettier/blob/master/README.md#special-rules
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort',
    'sort-keys-fix'
  ],
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#configuration
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      // https://github.com/preactjs/eslint-config-preact/blob/9dc5fc3682bb2da91209e05af4dcb150b24bec25/index.js#L51-L55
      pragma: 'h',
      version: '16.0'
    }
  },
  rules: {
    // See https://github.com/eslint/eslint/blob/master/docs/rules/no-console.md
    'no-console': ['error'],
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: true
      }
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': ['off'],
    // https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/README.md#installation
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['error'],
    // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/master/README.md#usage
    // Need to turn off `sort-imports` and `import/order` in order to use `simple-import-sort`
    'sort-imports': ['off'],
    'import/order': ['off'],
    'simple-import-sort/imports': ['error'],
    'simple-import-sort/exports': ['error'],
    // https://github.com/leo-buneev/eslint-plugin-sort-keys-fix/blob/master/README.md#usage
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        natural: true
      }
    ],
    // Disable some rules from `@typescript-eslint`
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-var-requires': ['off']
  }
}
