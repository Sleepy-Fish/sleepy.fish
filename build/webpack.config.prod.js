'use strict'

const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader'
        ]
      }, {
        test: /\.s[a|c]ss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: `
                @import "node_modules/mustard-ui/src/scss/vars/colors.scss";
                @import "node_modules/mustard-ui/src/scss/vars/breakpoints.scss";
                @import "static/style/overrides.scss";
              `
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
})
