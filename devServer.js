/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const host = 'localhost';
const port = 3000;

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  hot: true,
}).listen(port, host, (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log(`App served at ${host}:${port}`);
  return undefined;
});
