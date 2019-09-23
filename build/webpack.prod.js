const base = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const uglifyjs = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const env = require('../config/prod.env');

module.exports = merge(base, {

    plugins: [
        new uglifyjs(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env)
        }),

    ],
});