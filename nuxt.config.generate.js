
export default {
    mode: 'universal',

    srcDir: 'src/',
    buildDir: '.nuxt-dev',
    generate: {
        dir: './dist__', 
    },

    router: {
        //base: '/poc/ui-engine/'
    },
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '@/global/styles/global.scss',
    ],
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
            return ['script', 'style', 'font'].includes(type)
            }
        }
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }, 
        extractCSS: process.env.NODE_ENV === 'production',
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'components',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true,
                    }, 
                    defaultVendors: {
                        reuseExistingChunk: true, 
                        //name: '_bundle'
                    }
                }
            }
        },
        splitChunks: {
            pages: true,
            layouts: true, 
            vendor: true,
            commons: true,
            //runtime: true
        },
        filenames: {
        app: ({ isDev }) => isDev ? '[name].first.js' : '[name].js',
        chunk: ({ isDev }) => isDev ? '[name].one.js' : '[name].scripts.prod.js',
        css: ({ isDev }) => isDev ? '[name].01.css' : '[name].styles.prod.css',
        img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
        font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
        video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
        }
    }
}
