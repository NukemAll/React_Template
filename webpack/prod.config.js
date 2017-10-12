const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config.js');
const path = require('path');


module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new UglifyJSPlugin(),
    ],
});