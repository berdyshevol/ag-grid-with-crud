module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  extends: [
    'plugin:react/recommended',
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: [
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react-hooks',
    'eslint-plugin-import',
    'eslint-plugin-cypress',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'eslint-plugin-chai-friendly',
    '@typescript-eslint',
  ],
  env: {
    node: true,
    es6: true,
  },
  globals: {
    localStorage: true,
    window: true,
    navigator: true,
    document: true,
    ResizeObserver: true,
  },
  rules: {
    camelcase: 0,
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-unused-vars': [
      1,
      {
        varsIgnorePattern: '^ignore',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^ignore',
      },
    ],
    'no-continue': 0,
    'no-sequences': 1,
    'no-shadow': 1,
    'guard-for-in': 0,
    'arrow-body-style': 0,
    'no-case-declarations': 1,
    'no-unused-expressions': 0,
    'no-restricted-syntax': [1, 'LabeledStatement', 'WithStatement'],
    'no-param-reassign': ['error', { props: false }],
    'no-bitwise': ['error', { allow: ['^', '>>>'] }],
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'spaced-comment': ['warn', 'always'],
    'object-curly-newline': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [],
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
        custom: 'enforce',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/destructuring-assignment': [
      'warn',
      'always',
      { ignoreClassFields: true },
    ],
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-boolean-value': 'off',
    'react/no-unused-state': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'always',
      },
    ],
    'no-use-before-define': 'off',
    'consistent-return': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/ban-ts-comment': 'warn',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.tsx', '.jsx', 'js'] },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: [
          'camelCase',
          'strictCamelCase',
          'PascalCase',
          'StrictPascalCase',
          'snake_case',
          'UPPER_CASE',
        ],
        filter: {
          // Regex to match BEM CSS class-names
          regex:
            '^\\.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
          match: true,
        },
        modifiers: ['requiresQuotes'],
      },
    ],
    'no-else-return': 0,
    'no-underscore-dangle': ['error', { allow: ['_DEV_'] }],
    'import/no-useless-path-segments': [
      'warn',
      {
        noUselessIndex: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
