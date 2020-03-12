const path = require('path');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This is the main configuration object.
module.exports = {

    // Default mode is production. Alternatively 'developemnt' or 'none'.
    mode: 'production',

    // Path to your entry point. From here Webpack will begin its work.
    entry: './src/webpack.entry.js',

    // Path for bundles and filename for the javascript bundle:
    output: {
        path: path.resolve(__dirname, 'dist/bundle'),
        filename: 'bundle.prod.js'
    },

    module: {
        rules: [
            {
                // Apply rule for .javascript files:
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
                        loader: "postcss-loader"
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
            filename: "bundle.prod.css"
        })

    ],
};