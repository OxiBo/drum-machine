const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


let config = {
    entry: [
        'babel-polyfill',
        './src/js/index.js'
    ],

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        // publicPath: '/'
    },
    devServer: {
        overlay: true
    },
// use ?url=false to be able to load the background images
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }


        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([{from: './src/sounds', to: 'sounds'}])
    ]

}

module.exports = (env, options) => {
    const production = options.mode === 'production';
    config.devtool = production ? false : 'eval-source-map';

    return config;
}
