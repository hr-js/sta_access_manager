const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "production";
const devtool = mode === "production" ? false : "source-map";

const config = {
  mode,
  entry: path.resolve(__dirname, "./src/client/index.jsx"),
  output: {
    path: path.resolve(__dirname, "./public/js"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    // inline: true,
    open: true
  },
  devtool,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin()]
};

module.exports = config;
