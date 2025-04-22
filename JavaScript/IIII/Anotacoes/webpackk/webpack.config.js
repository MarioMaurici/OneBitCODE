const path = require('path'); // Importing the path module from Node.js

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
    },
    mode: 'development', // production: minify the code -- development : not minify the code
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']

        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}