const PurgecssPlugin = require('purgecss-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    optimization: {
      minimizer: [new TerserPlugin()]
    },

    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js'),
        ])
      })
    ]
  }
};
