const base = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const env = require('../config/dev.env');
const webpack = require('webpack');

module.exports = merge(base, {

    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env)
        }),

    ],
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 9000,
        compress: true,
        open: true
    }
});