const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, options) => {
  const isProd = options.mode === 'production';

  const config = {
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
        // {
        //   // Loader for webpack to process CSS with PostCSS
        //   loader: 'postcss-loader',
        //   options: {
        //     plugins: function () {
        //       return [
        //         require('autoprefixer')
        //       ];
        //     }
        //   }
        // },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
  };

  return config;
};
