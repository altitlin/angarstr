import { merge } from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from '../node_modules/terser-webpack-plugin';

import { BUNDLE_HASH_SIZE } from './constants';
import StyleOptions from './style-options.prod';
import configCommon from './webpack.config.common';

export default merge(configCommon, StyleOptions, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: `static/css/[name].[contenthash:${BUNDLE_HASH_SIZE}].css`,
      chunkFilename: `static/css/chunk.[id].[contenthash:${BUNDLE_HASH_SIZE}].css`,
      ignoreOrder: true,
    }),
  ],
  optimization: {
    emitOnErrors: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          output: {
            comments: false,
          },
          compress: {
            pure_funcs: ['console.info', 'console.debug', 'console.warn'],
          },
          mangle: true,
          module: false,
          toplevel: false,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  }
});
