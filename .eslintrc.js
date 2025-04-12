module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'next',
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react-hooks/exhaustive-deps': 'warn',
    },
    ignorePatterns: ["components/ui/**/*.ts", "components/ui/**/*.tsx"]
  }
  