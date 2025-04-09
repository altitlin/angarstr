import * as path from 'path';
import { Configuration } from '../node_modules/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import { BUNDLE_HASH_SIZE, ASSET_HASH_SIZE } from './constants';

const config: Configuration = {
  entry: path.join(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules'),
    ],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: `static/js/[name].[contenthash:${BUNDLE_HASH_SIZE}].js`,
    chunkFilename: `static/js/chunk.[id].[contenthash:${BUNDLE_HASH_SIZE}].js`,
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(webp|ttf|png)$/i,
        type: 'asset/resource',
        generator: {
          filename: `static/media/[name]_[hash:${ASSET_HASH_SIZE}][ext]`,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: 'defer',
      filename: 'index.html',
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: 'static/public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
};

export default config;
