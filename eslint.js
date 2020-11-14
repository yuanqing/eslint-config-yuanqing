module.exports = {
  // See https://github.com/prettier/eslint-config-prettier/blob/master/README.md#example-configuration
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'sort-keys-fix',
    'react-hooks'
  ],
  // See https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#configuration
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      // See https://github.com/preactjs/eslint-config-preact/blob/3ac23ffe761236aae1e5cc5b44614d06d71e3476/index.js#L51-L53
      pragma: 'h',
      version: '16.0'
    }
  },
  rules: {
    'no-console': ['error'],
    // See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: true
      }
    ],
    // See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': ['off'],
    // See https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/README.md#installation
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['error'],
    // See https://github.com/lydell/eslint-plugin-simple-import-sort/blob/master/README.md#usage
    'sort-imports': ['off'],
    'import/order': ['off'],
    'simple-import-sort/sort': ['error'],
    // See https://github.com/leo-buneev/eslint-plugin-sort-keys-fix#usage
    'sort-keys': [
      'error',
      'asc',
      {
        natural: true
      }
    ],
    'sort-keys-fix/sort-keys-fix': ['error'],
    // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Disable some rules from `@typescript-eslint`
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-var-requires': ['off']
  }
}
