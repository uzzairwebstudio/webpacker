const path = require('path');


module.exports = {
    entry: './src/app.js',
    mode:'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.js',
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader','sass-loader']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        babelrc:false,
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        compress: true,
        open: true
    }

}