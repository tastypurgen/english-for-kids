const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = (env, options) => {
  const isProd = options.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'none' : 'source-map',
    watch: !isProd,
    entry: ['./src/script.js', './src/sass/style.scss'],
    output: {
      filename: 'script.js',
      path: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },

    devServer: {
      static: {
        directory: path.join(__dirname, './dist'),
      },
      compress: true,
      historyApiFallback: true,
      https: false,
      open: true,
      hot: true,
      port: 3000,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new MiniCssExtractPlugin({ filename: 'style.css' }),
      new CopyPlugin({
        patterns: [
          { from: './src/img', to: './img' },
        ],
      }),
    ],

  };
};
