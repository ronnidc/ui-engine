// Webpack uses this to work with directories
const path = require('path');

// This is main configuration object.
module.exports = {

    // Path to your entry point. From this file Webpack will begin his work
    entry: './src/static/app.js',

    // Path and filename of your result bundle.
    output: {
        path: path.resolve(__dirname, 'dist/bundle'),
        filename: 'bundle.prod.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    // Default mode for Webpack is production.
    mode: 'development'
};