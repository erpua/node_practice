module.exports = {
  parser: ' @babel/eslint-parser',
  env: {
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': 'off',
    //'space-between-function-paren': 0
    'space-between-function-paren': 'off'
  }
}
