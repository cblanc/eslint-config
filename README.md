![Release](https://github.com/cblanc/eslint-config/workflows/Release/badge.svg)
![CI](https://github.com/cblanc/eslint-config/workflows/CI/badge.svg)

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
