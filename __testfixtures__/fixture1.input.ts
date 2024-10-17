//change the import package from eslint-webpack-plugin to eslint-rspack-plugin

const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};