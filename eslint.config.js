import js from '@eslint/js'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default [
  { ignores: ['.nyc_output/', 'coverage/'] },
  js.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.node },
    },
    rules: {
      strict: ['error', 'global'],
    },
  },
]
