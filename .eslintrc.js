module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'immutable',
  ],
  rules: {
    'immutable/no-mutation': 2
  },
};
