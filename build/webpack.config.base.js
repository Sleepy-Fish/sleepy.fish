'use strict'

const path = require('path');
const srcPath = path.join(__dirname, '..', 'src')
const staticPath = path.join(__dirname, '..', 'static');
const distPath = path.join(__dirname, '..', 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    filename: "[name].[fullhash].js",
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'eslint-loader',
        enforce: 'pre',
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.join(staticPath, 'img/[name].[fullhash].[ext]'),
          }
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.join(staticPath, 'fonts/[name].[fullhash].[ext]')
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: path.join(staticPath, 'favicon.png'),
      inject: true
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: staticPath,
        to: path.join(distPath, 'static'),
      }]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      chunkFilename: '[id].[fullhash].css',
    }),
  ]
}
