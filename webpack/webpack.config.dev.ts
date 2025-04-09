import path from 'path';
import { merge } from 'webpack-merge';

import StyleOptions from './style-options.dev';
import configCommon from './webpack.config.common';

export default merge(configCommon, StyleOptions, {
  mode: 'development',
  devtool: 'inline-source-map',
  // @ts-ignore
  devServer: {
    open: true,
    compress: true,
    hot: true,
    port: 4200,
    client: {
      overlay: true,
      progress: false,
      reconnect: true,
    },
    static: {
      publicPath: '/',
      directory: path.join(__dirname, '../dist/')
    },
    historyApiFallback: {
      disableDotRule: true,
    },
  },
});
