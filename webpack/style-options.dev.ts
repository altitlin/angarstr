import {
  REGEX_PATTERN_CSS,
  REGEX_PATTERN_SASS,
  STYLESHEET_IDENT_HASH_SIZE_DEV,
} from './constants';

export default {
  module: {
    rules: [
      {
        test: REGEX_PATTERN_CSS,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: REGEX_PATTERN_SASS,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
                exportLocalsConvention: 'camel-case-only',
                localIdentName: `[path][name]__[local]--[hash:base64:${STYLESHEET_IDENT_HASH_SIZE_DEV}]`,
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
