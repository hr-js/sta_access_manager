const path = require('path');

const config = {
  entry: {
    './public/js/bundle': './src/client/index.js',
    './app': './src/server/app.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.spec\.js$/,
        loader: 'webpack-espower-loader',
      },
    ],
  },
};

module.exports = config;
