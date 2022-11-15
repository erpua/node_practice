module.exports = {
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
    'comma-dangle': 'off'
  }
}
