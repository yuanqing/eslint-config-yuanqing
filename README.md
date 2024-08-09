# eslint-config-yuanqing [![npm Version](https://img.shields.io/npm/v/eslint-config-yuanqing?cacheSeconds=1800)](https://www.npmjs.com/package/eslint-config-yuanqing)

> An opinionated [ESLint](https://eslint.org/) configuration for [TypeScript](https://typescriptlang.org/) and [Preact](https://preactjs.com/) projects

## Features

- No semi-colons *a la* [Standard](https://standardjs.com/)
- Auto-formatting with [Prettier](https://prettier.io/)
- Auto-sorting of `import` statements
- Auto-sorting of object keys and JSX `prop` keys
- [Rules for hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## Usage

Install:

<!-- ``` markdown-interpolate: node scripts/print-npm-installation-command.js -->
```
$ npm install --save-dev eslint@8 prettier@3 typescript@5
$ npm install --save-dev --save-exact \
    eslint-config-yuanqing@0.0.9 \ 
    @typescript-eslint/eslint-plugin@8.0.1 \ 
    eslint-plugin-import@2.29.1 \ 
    eslint-plugin-prettier@5.2.1 \ 
    eslint-plugin-react@7.35.0 \ 
    eslint-plugin-react-hooks@4.6.2 \ 
    eslint-plugin-simple-import-sort@12.1.1 \ 
    eslint-plugin-sort-keys-fix@1.1.2
```
<!-- ``` end -->

Then, update `package.json` as follows:

```json
{
  "scripts": {
    "fix": "eslint --fix 'src/**/*.{ts,tsx}'",
    "lint": "eslint 'src/**/*.{ts,tsx}'"
  },
  "eslintConfig": {
    "extends": "yuanqing",
    "root": true
  },
  "prettier": "eslint-config-yuanqing/prettier"
}
```

## License

[MIT](LICENSE.md)
