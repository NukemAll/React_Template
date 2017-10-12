const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');


module.exports = merge(baseConfig, {
    devtool: 'eval-source-map',

    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "../public"),
        // compress: true,
        port: 3000,
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('development'),
            }
        }),
    ],

});
