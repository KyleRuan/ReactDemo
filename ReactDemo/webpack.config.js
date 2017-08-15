var webpack = require('webpack');
var path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "inline-source-map", //在debug的时候打开可以定位错误
  entry: "./src/js/root.js",
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true
  },
  module: {
    rules: [
      {
      test: /\.js?$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }]
    },
    {
       test: /\.css$/,
       use: [
         { loader: "style-loader" },
         { loader: "css-loader"
           // , options: {modules:true }
          }
       ]
     }
  ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath:"http://localhost:8080/dist/"
  }
};
