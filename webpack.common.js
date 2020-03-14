// Webpack DEV

// Require dependencies: 
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This is the main configuration object.
module.exports = {

    // Path for bundles and filename for the javascript bundle:
    output: {
        path: path.resolve(__dirname, 'dist/bundles'),
        filename: 'bundle.[name].js' 
        // (The [name] is related to entry.name in webpack.prod & webpack.dev)
    },

    module: {
        rules: [
            {
                // Apply rule for .javascript files:
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        // 2. This loader transpiles ES6 to ES5 (for IE11):
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }, 
                    {
                        // 1. This loader dynamically imports all *.js files:
                        loader: 'import-glob'
                    }
                ],
            }, 
            {
                // Apply rule for .sass, .scss or .css files:
                test: /\.(sa|sc|c)ss$/,
          
                // Set loaders to transform files.
                // Loaders are applied from right to left(!)
                use: [
                    {
                        // 4. This loader extracts css into a separate bundle:
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    {
                        // 3. This loader resolves url's and @imports in CSS:
                        loader: "css-loader"
                    },
                    {
                        // 2. This loader apply postCSS fixes like autoprefixer and minifying:
                        loader: "postcss-loader", 
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        // 1. First loader transforms SASS to vanilla CSS:
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                // 1. This importer dynamically looks for all *.scss files:
                                importer: globImporter()
                            }
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        // Filename for the stylesheet bundle:
        new MiniCssExtractPlugin({
            filename: 'bundle.[name].css'
            // (The [name] is related to entry.name in webpack.prod & webpack.dev)
        }), 
        // Clean the output.path directory:
        new CleanWebpackPlugin()
    ],
};