const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    library: 'faveur', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // 指定输出格式
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: "url-loader",
        // todo: 这种写法有待调整
        query: {
          limit: 10000,
          name: path.posix.join("static", "[name].[hash:7].[ext]")
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  optimization: {
    minimizer: []
  },
  devtool: "#eval-source-map"
};

module.exports = webpackConfig;
