// Webpack DEV

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// This is the main configuration object.
module.exports = merge(common, {

    // Development mode is assuring readability of the bundles content. 
    mode: 'development',

    // Path to your entry point. From here Webpack will begin its work.
    entry: { 
        dev: './src/webpack.entry.js' 
        // (The "dev:" part names the development bundle-files)
    },

});