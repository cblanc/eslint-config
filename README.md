[![CircleCI](https://circleci.com/gh/cblanc/eslint-config.svg?style=svg)](https://circleci.com/gh/cblanc/eslint-config)

# ESLint Typescript Config

## Usage

```bash
npm install --save-dev @cablanchard/eslint-config tslint 
```

In `.eslintrc.js`

```javascript
module.exports = {
  "extends": "@cablanchard"
}
```

In `package.json`

```json
{
  "scripts": {
    "lint": "eslint files/**/*.ts"
  }
}
```

## Licence

MIT

