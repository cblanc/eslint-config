export = {
  env: {},
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "@typescript-eslint/tslint"],
  rules: {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "constructor-super": "error",
    "dot-notation": "error",
    "guard-for-in": "error",
    "no-bitwise": "error",
    "no-console": [
      "error",
      {
        allow: ["debug", "info", "time", "timeEnd", "trace"],
      },
    ],
    "no-debugger": "error",
    "no-invalid-this": "error",
    "no-new-wrappers": "error",
    "no-undef-init": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "@typescript-eslint/tslint/config": [
      "error",
      {
        rules: {
          "match-default-export-name": true,
          "no-boolean-literal-compare": true,
          "no-shadowed-variable": true,
          "prefer-method-signature": true,
        },
      },
    ],
  },
};
