const base = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const uglifyjs = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(base, {
    plugins: [
        new uglifyjs(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
});