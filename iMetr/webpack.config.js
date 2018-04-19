const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        app: ['./src/client.js'],
    },
    output: {
        filename: 'js/[name].js',
        publicPath: '/',
        path: '/var/www/web',
        library: '[name]'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react-app'],
                        babelrc: false
                    }
                }
            },
            {test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader?name=img/[name].[ext]?[sha512:hash:base64:7]'},
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]?[sha512:hash:base64:7]'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }

        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/assets', to: 'public'},
            {from: './src/assets/favicons', to: ''}
        ]),
        new HtmlWebpackPlugin({
            title: 'iMetr',
            template: 'src/index.ejs',
            hash: true,
            cache: false
        })
    ]
};
