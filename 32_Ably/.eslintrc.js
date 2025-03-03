module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
