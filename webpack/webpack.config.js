// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');

const config = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: path.resolve(__dirname, '/public'),
        filename: 'bundle.js'
    },

    plugins: [
        // new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('development'),
            }
        }),
        // new HtmlWebpackPlugin({
        //     title: "React Template",
        //     template: "html-template.html",
        //     inject: "body"
        // })
    ],

    module: {
        rules: [
            {
                test:/\.jsx?$/,
                include:[
                    path.resolve(__dirname, "src")
                ],
                exclude:[
                    path.resolve(__dirname, "node_modules"),
                    // path.resolve(__dirname, "doc")
                ],
                use: "babel-loader"
            },
            {
                test: /\.html?$/,
                use:  "html-loader"
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 3000
      }
};

module.exports = config;
