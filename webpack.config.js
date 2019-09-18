const path = require('path');


module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    output: {
        filename: ' js/app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        compress: true,
        open: true
    }

}