// Webpack PROD

// Require webpack-merge which enables the merge of webpack.config files to keep things DRY:
const merge = require('webpack-merge');

// Require the common parts of webpack.config:
const common = require('./webpack.common.js');

// This is the main configuration object:
module.exports = merge(common, {

    // Production mode is optimizing/compressing the bundles for production. 
    mode: 'production',
    devtool: "cheap-module-source-map",

    // Path to your entry point. From here Webpack will begin its work.
    entry: { 
        default: './src/entry.default.js' 
        // (The "prod:" part names the production bundle-files. Rename to "prod" or similar if it makes sense.)
    },

});