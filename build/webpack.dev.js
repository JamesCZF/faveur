const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: "./examples/entry.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:7].js",
    chunkFilename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    modules: ["node_modules"]
  },
  devServer: {
    host: "localhost",
    port: 8085,
    publicPath: "./",
    hot: true,
    open: true
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
        use: ["style-loader", "css-loader", "sass-loader"]
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
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "../index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimizer: []
  },
  devtool: "#eval-source-map"
};

module.exports = webpackConfig;
