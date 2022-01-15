'use strict'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = process.env.NODE_ENV || 'development';
const prod = env === 'production'
const DEV_HOST = 'localhost'
const DEV_PORT = 8080

/* ###############################################
   #                                             #
   #    PLUGINS                                  #
   #                                             #
   ############################################### */

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  }),
  new CopyWebpackPlugin({
    patterns: [{
      from: './static',
      to: './static',
    }]
  }),
];
if (prod) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    })
  );
}

/* ###############################################
   #                                             #
   #    RULES                                    #
   #                                             #
   ############################################### */

   const rules = [
    {
      test: /\.s[ac]ss$/,
      use: [
        prod ? MiniCssExtractPlugin.loader : 'style-loader',
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
          name: 'img/[name].[contenthash].[ext]',
        }
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fnt/[name].[contenthash].[ext]',
        }
      }
    }
  ]

/* ###############################################
   #                                             #
   #    CONFIG                                   #
   #                                             #
   ############################################### */

const config = {
  mode: env,
  devtool: prod ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': './static',
    }
  },
  entry: './src',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].[contenthash].js",
    publicPath: '/',
    clean: true,
  },
  module: {
    rules,
  },
  plugins,
}

if (prod) {
  config.optimization = {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  };
} else {
  config.devServer = {
    compress: true,
    host: DEV_HOST,
    port: DEV_PORT,
    open: true,
    static: {
      directory: path.resolve(__dirname, "static"),
    },
    devMiddleware: {
      publicPath: '/',
    },
    client: {
      logging: "warn",
      overlay: {
        errors: true,
        warnings: true,
      },
      progress: true,
    },
  };
}

module.exports = config;
