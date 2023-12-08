module.exports = {
  extends: [
    // https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended
    'eslint:recommended',
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/README.md#configuration-legacy-eslintrc-
    'plugin:react/recommended',
    // https://typescript-eslint.io/getting-started/#step-2-configuration
    'plugin:@typescript-eslint/recommended',
    // https://github.com/prettier/eslint-plugin-prettier/blob/master/README.md#recommended-configuration
    'plugin:prettier/recommended'
  ],
  // https://typescript-eslint.io/getting-started/#step-2-configuration
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    // https://typescript-eslint.io/getting-started/#step-2-configuration
    '@typescript-eslint',
    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md#custom-configuration
    'react-hooks',
    // https://github.com/import-js/eslint-plugin-import/blob/main/README.md#installation
    'import',
    // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/README.md#usage
    'simple-import-sort',
    // https://github.com/leo-buneev/eslint-plugin-sort-keys-fix/blob/master/README.md#usage
    'sort-keys-fix'
  ],
  settings: {
    // https://github.com/preactjs/eslint-config-preact/blob/6e24f7320c17d498c95d342ee38c4fb83494b494/index.js#L55-L61
    react: {
      pragma: 'h',
      version: '16.0'
    }
  },
  rules: {
    // https://eslint.org/docs/latest/rules/no-console
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
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['class', 'clip-rule', 'fill-rule', 'spellcheck']
      }
    ],
    // https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/README.md#custom-configuration
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['error'],
    // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/master/README.md#usage
    'simple-import-sort/imports': ['error'],
    'simple-import-sort/exports': ['error'],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': ['error'],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': ['error', { count: 1 }],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': ['error'],
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
