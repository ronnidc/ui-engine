// Webpack PROD

// Require webpack-merge which enables the merge of webpack.config files to keep things DRY:
const merge = require('webpack-merge');

// Require the common parts of webpack.config:
const common = require('./webpack.common.js');

// This is the main configuration object:
module.exports = merge(common, {

    // Production mode is optimizing/compressing the bundles for production. 
    mode: 'production',

    // Path to your entry points. From here Webpack will begin its work.
    entry: { 
        audi: './src/entry.theme.audi.js',
        seat: './src/entry.theme.seat.js'
    },

});