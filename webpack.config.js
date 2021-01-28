var path = require('path');
const webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {

    entry: './app/index.js',

    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
          },
        extensions: ['*', '.jsx', '.js']
    },
    output: {

        path: path.resolve(__dirname, 'dist'),

        filename: 'index_bundle.js'

    },
    devtool: 'inline-source-map',

    module: {

        rules: [

            { test: /\.(jsx|js)$/, use: ['babel-loader'], exclude: /node_modules/ },


            { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader',] },
            // Second Rule
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //                 localsConvention: 'camelCase',
            //                 sourceMap: true
            //             }
            //         }
            //     ]
            // }

        ]

    },

    mode: 'development',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({

            template: 'app/index.html'

        })

    ],

    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
      }



}