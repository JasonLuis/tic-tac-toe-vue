module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended'
  ],
  plugins: [],
  rules: {
    'vue/valid-v-slot': 'off'
  }
};
