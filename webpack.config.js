const path = require('path');

const config = {
  entry: path.resolve(__dirname, './src/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, './public/js'),
    publicPath: '/js/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    watchContentBase: true,
    inline: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
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
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};

module.exports = config;
