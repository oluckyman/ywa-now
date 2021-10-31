module.exports = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [`airbnb-base`, `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `prettier`],
  plugins: [`@typescript-eslint`, `prettier`],
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
      },
    },
  },
  rules: {
    'prettier/prettier': `error`,
    quotes: [`error`, `backtick`, { avoidEscape: true }],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': `off`,
    '@typescript-eslint/no-use-before-define': [`error`],
    'import/extensions': [`error`, `never`],
    'no-console': [`warn`, { allow: [`info`, `warn`, `error`] }],
  },
}
