const merge = require('webpack-merge');
const common = require('./webpack.base.config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  entry: {
    main: './src/js/app.js'
  },
  output: {
    filename: '[name].[chunkhash].bundle.js'
},
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Resume',
      template: './index.html'
    }),
    new ExtractTextPlugin("styles.css"),
    new CopyWebpackPlugin([
      { 
          from: './src/js/index.js', 
          to: ''
      },
  ])
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        main: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
      }
    }
  }
});