// Webpack DEV

// Require webpack-merge which enables the merge of webpack.config files to keep things DRY:
const merge = require('webpack-merge');

// Require the common parts of webpack.config:
const common = require('./webpack.common.js');

// This is the main configuration object.
module.exports = merge(common, {

    // Development mode is assuring readability of the bundles content. 
    mode: 'development',
    devtool: "inline-source-map",

    // Path to your entry point. From here Webpack will begin its work.
    entry: { 
        dev: './src/entry.default.js' 
        // (The "dev:" part names the development bundle-files)
    },

});