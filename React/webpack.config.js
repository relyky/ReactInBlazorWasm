const path = require("path");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production", // development | production
  entry: {
    index: "/src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../wwwroot/js"), // output folder
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
    ],
  },
  //plugins: [
  //  new HtmlWebpackPlugin({
  //    template: "./src/index.html", // base html
  //  }),
  //],
};