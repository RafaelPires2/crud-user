module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['@typescript-eslint', 'import', 'deprecation', 'jsx-expressions', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-unresolved': ['error', { ignore: ['.png$', '.webp$', '.jpg$', 'story-loader'] }],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unassigned-import': ['error'],
    radix: ['warn', 'as-needed'],
    'react/jsx-boolean-value': ['warn', 'never'],
    'deprecation/deprecation': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@atomic',
            message: 'Please use @atomic/<component> instead.',
          },
        ],
      },
    ],
    'react/no-unstable-nested-components': ['error'],
    'react/jsx-handler-names': 'warn',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    '@typescript-eslint/prefer-optional-chain': 'error',
    'jsx-expressions/strict-logical-expressions': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'no-unsafe-optional-chaining': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    'no-console': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': ['error', { enforceForJSX: true }],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/unbound-method': 'off',
  },
  overrides: [
    {
      files: ['*.story.ts*', '*.stories.ts*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
