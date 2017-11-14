const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {handler: './handler.ts'},
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.ts',
      '.tsx'
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externals: [nodeExternals()],
  target: 'node',
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
  },
};
