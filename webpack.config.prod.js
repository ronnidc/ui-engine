// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            }, 
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,
          
                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [
                    {
                        // After all CSS loaders we use plugin to do his work.
                        // It gets all transformed CSS and extracts it into separate
                        // 4. single bundled file
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    {
                        // 3. This loader resolves url() and @imports inside CSS
                        loader: "css-loader",
                    },
                    {
                        // 2. Then we apply postCSS fixes like autoprefixer and minifying
                        loader: "postcss-loader"
                    },
                    {
                        // 1. First we transform SASS to standard CSS
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: "bundle.prod.css"
        })

    ],

    // Default mode for Webpack is production.
    mode: 'development'
};