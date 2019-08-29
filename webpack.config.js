const path = require("path");
const nodeExternals = require("webpack-node-externals");

var config = {
  entry: "./src/index.ts",
  mode: "production",
  target: "node",
  output: {
    libraryTarget: "commonjs",
    filename: "index.js",
    path: path.resolve(__dirname, "./dist")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  externals: [nodeExternals()],
  optimization: {
    nodeEnv: false
  },
  stats: "verbose"
};

module.exports = config;
