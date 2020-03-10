
export default {
    mode: 'universal',

    srcDir: 'src/',
    buildDir: '.nuxt-dev',
    generate: {
        dir: './dist', 
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
    ],
    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'components',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        filenames: {
            chunk: ({ isDev }) => isDev ? '[name].js' : '[name].scripts.prod.js',
            css: ({ isDev }) => isDev ? '[name].css' : '[name].styles.prod.css',
        }
    }
}
