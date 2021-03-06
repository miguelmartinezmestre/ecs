import {Configuration} from "webpack";
import path from "path";
import {CheckerPlugin} from "awesome-typescript-loader";
import webpack from "webpack"

const config: Configuration = {
  mode: "development",
  target: ['web','es5'],
  devServer: {
    contentBase: "./public",
  },
  resolve: { extensions: [".ts", ".js", ".tsx"] },
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  devtool: "source-map",
  plugins: [new CheckerPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ],
};

module.exports = config;
