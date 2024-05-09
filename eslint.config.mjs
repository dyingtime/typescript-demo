import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {languageOptions: {globals: globals.node}},
  eslint.configs.all,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'unused-imports': unusedImports,
    },

  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    ignores: [
      'eslint.config.mjs',
      'commitlint.config.js',
    ],
  },
];
