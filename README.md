![Release](https://github.com/cblanc/eslint-config/workflows/Release/badge.svg)
![CI](https://github.com/cblanc/eslint-config/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/%40cablanchard%2Feslint-config.svg)](https://badge.fury.io/js/%40cablanchard%2Feslint-config)

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
