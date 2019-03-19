let path = require('path');
let webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const DEBUG = true;

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    devServer: {
        inline: true,
        contentBase: '.',
        port: 3000,
        historyApiFallback: true,   // 404 pages fall back on index.html
        disableHostCheck: true // to enable all hosts
        // compress: true
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'js/bundle.min.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.sass$/,
                use: [
                    DEBUG ? "style-loader": MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.css$/,
                use: [
                    DEBUG ? "style-loader": MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};


