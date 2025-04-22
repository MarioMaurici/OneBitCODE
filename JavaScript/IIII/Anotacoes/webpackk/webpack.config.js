const path = require('path'); // Importing the path module from Node.js

module.exports = {
    entry: {
        main: './src/index.js',
        hello: './src/hello.js' // Entry point of the application
    },
    mode: 'development', // production: minify the code -- development : not minify the code
    output: {
        path: path.resolve(__dirname, 'public'), // Output directory
        filename: '[name].bundle.min.js'// Output file name
    }
}