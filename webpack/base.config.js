const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.html?$/,
                use:  "html-loader"
            },
            {
                test:/\.jsx?$/,
                include:[
                    path.resolve(__dirname, "../src")
                ],
                exclude:[
                    path.resolve(__dirname, "../node_modules"),
                ],
                use: [{
                    loader: "babel-loader",
                    options: { 
                        babelrc: false,
                        presets: ['es2015', 'react', 'stage-0'], 
                        plugins: [ 
                            [ "import", { libraryName: "antd", style: "css" } ]
                        ],
                    }
                }],
            },
        ],
    },

    // plugins: [
    //     new webpack.EnvironmentPlugin([
    //         'NODE_ENV',
    //     ]),
    // ],
};

