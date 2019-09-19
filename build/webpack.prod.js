const base = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
    plugins: [
        new uglifyjs()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', 
                        options:{
                            minimize:true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
});