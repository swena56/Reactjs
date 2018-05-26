// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  plugins: [
    // your custom plugins
    //   new HtmlWebpackPlugin({
    //       template: './preview-head.html'
    //   }),
  ],
  module: {
    rules: [
      // add your custom rules.
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ],
  },
};