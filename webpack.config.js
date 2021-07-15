/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
/* eslint-disable import/no-extraneous-dependencies */
require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './app.js',
    html: './index.html',
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
};
