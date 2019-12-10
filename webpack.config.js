var path = require('path');

var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {

    entry : './app/index.js',

    resolve:{
        extensions:['*','.jsx','.js']
    },
    output : {

        path : path.resolve(__dirname , 'dist'),

        filename: 'index_bundle.js'

    },

    module : {

        rules : [

            {test : /\.(jsx|js)$/, use:['babel-loader'],exclude:/node_modules/},
          

            {test : /\.css$/,exclude:/node_modules/, use:['style-loader', 'css-loader',]}

        ]

    },

    mode:'development',

    plugins : [

        new HtmlWebpackPlugin ({

            template : 'app/index.html'

        })

    ]




}