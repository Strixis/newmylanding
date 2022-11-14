const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractplugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const imgOutput = 'sources/img/[name][ext]';
const fontsOutput = 'sources/fonts/[name][ext]';

module.exports = (_, { mode }) => ({
  devtool: mode === 'production' ? false : 'source-map',
  resolve: {
    extensions: [
      '.js',
      '.css',
    ],
    alias: {
      styles: path.resolve(__dirname, 'src', 'assets', 'styles'),
      fonts: path.resolve(__dirname, 'src', 'assets', 'fonts'),
      img: path.resolve(__dirname, 'src', 'assets', 'img'),
      scripts: path.resolve(__dirname, 'src', 'assets', 'scripts'),
    },
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/i,
          /dist/i,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractplugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jp(e)?g|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `${imgOutput}`,
        },
      },
      {
        test: /^favicon\.(jp(e)?g|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: `${fontsOutput}`,
        }
      },
    ],
  },
  optimization: {
    minimize: mode === 'production' ? true : false,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'title',
      favicon: path.resolve(__dirname, 'src', 'favicon.png'),
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractplugin({
      filename: 'index.css',
    }),
  ],
});
