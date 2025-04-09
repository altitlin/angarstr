import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {
  REGEX_PATTERN_CSS,
  REGEX_PATTERN_SASS,
  STYLESHEET_IDENT_HASH_SIZE_PROD,
} from './constants';

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      sourceMap: false,
      plugins: [
        'autoprefixer',
        {
          remove: false,
        },
      ],
    },
  },
};

export default {
  module: {
    rules: [
      {
        test: REGEX_PATTERN_CSS,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          postCssLoader,
        ],
      },
      {
        test: REGEX_PATTERN_SASS,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
                exportLocalsConvention: 'camel-case-only',
                localIdentName: `[hash:base64:${STYLESHEET_IDENT_HASH_SIZE_PROD}]`,
              },
            },
          },
          postCssLoader,
          'sass-loader'
        ],
      },
    ],
  },
};
