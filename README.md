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

```
$ yarn add --dev eslint-config-yuanqing eslint@7 prettier@2 typescript@4
```

Then, update `package.json` as follows:

```json
{
  "scripts": {
    "fix": "eslint --fix 'src/**/*.{ts,tsx}'",
    "lint": "eslint 'src/**/*.{ts,tsx}'"
  },
  "eslintConfig": {
    "extends": "yuanqing"
  },
  "prettier": "eslint-config-yuanqing/prettier"
}
```

## License

[MIT](LICENSE.md)
