const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        
        // vendor: ['jquery', 'fullpage.js'],
        main: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
      },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
          template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            // {output}/file.txt
            { 
                from: './src/img', 
                to: 'img'
            },
        ])
      ],
      optimization: {
        splitChunks: {
        chunks: "all", // 必须三选一： "initial" | "all"(默认就是all) | "async" 
        minSize: 0, // 最小尺寸，默认0
        minChunks: 1, // 最小 chunk ，默认1
        maxAsyncRequests: 1, // 最大异步请求数， 默认1
        maxInitialRequests : 1, // 最大初始化请求书，默认1
        name: function(){}, // 名称，此选项可接收 function
        cacheGroups:{ // 这里开始设置缓存的 chunks
            priority: false, // 缓存组优先级
            main: { // key 为entry中定义的 入口名称
                 // 必须三选一： "initial" | "all" | "async"(默认就是异步) 
                test: /jquery|fullpage.js/, // 正则规则验证，如果符合就提取 chunk
                name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
                minSize: 0,
                minChunks: 1,
                enforce: true,
                maxAsyncRequests: 1, // 最大异步请求数， 默认1
                maxInitialRequests : 1, // 最大初始化请求书，默认1
                reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
            }
        }
     }
    }
}