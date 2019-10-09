const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackCommonConfig = require("./webpack.common.config.js");

module.exports = merge(webpackCommonConfig, {
  mode: "development",
  entry: ["./styles/main.scss", "./src/index.js"],
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(tj)s$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.viewer.json"
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
});
