const { merge } = require('webpack-merge'); // this is used to be able to merge webpack.common.js with this file
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig); // devConfig will override anything that we have set in commonConfig if they set the same thing
