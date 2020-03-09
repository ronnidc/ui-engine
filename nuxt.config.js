
export default {
    mode: 'universal',

    srcDir: 'src/',
    buildDir: '.nuxt-dev',
    generate: {
        dir: './dist'
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
        /* CSS file in the project */
        /*'@/global/styles/global.css',*/
        /* SCSS file in the project */
        '@/global/styles/global.scss'
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
                    }
                }
            }
        },
        splitChunks: {
            pages: true,
            vendor: true,
            commons: true,
            layouts: true
        },
        filenames: {
        app: ({ isDev }) => isDev ? '[name].js' : '[name].js',
        chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js',
        css: ({ isDev }) => isDev ? '[name].css' : '[name].css',
        img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
        font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
        video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
        }
    }
}
