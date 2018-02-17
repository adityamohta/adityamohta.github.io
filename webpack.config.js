let path = require('path');
let webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: '.',
        port: 3000,
        historyApiFallback: true,   // 404 pages fall back on index.html
        disableHostCheck: true // to enable all hosts
        // compress: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader?presets[]=react,presets[]=env'],
                exclude: /node_modules/
            },
            {
                test: /\.sass/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};


