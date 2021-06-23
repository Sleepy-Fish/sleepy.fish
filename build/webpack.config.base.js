'use strict'

const path = require('path');
const srcPath = path.join(__dirname, '..', 'src')
const staticPath = path.join(__dirname, '..', 'static');
const distPath = path.join(__dirname, '..', 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': staticPath,
    }
  },
  entry: srcPath,
  output: {
    path: distPath,
    filename: "[name].[hash:7].js",
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.join(staticPath, 'img/[name].[hash:7].[ext]')
          }
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.join(staticPath, 'fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: staticPath,
        to: distPath,
      }]
    })
  ]
}
