import * as config from './config.js';

export default {
    mode: 'universal',

    srcDir: 'src/',

    generate: {
        dir: './dist/generated-prototype' + config.PREVIEW_BASE_PATH,
    },

    router: {
        base: process.env.NODE_ENV === 'production'
            ? config.PREVIEW_BASE_PATH || '/'
            : config.BASE_PATH || '/',
        linkActiveClass: 'is-active-parent',
        linkExactActiveClass: 'is-active-exact',
    },

    buildModules: [
        '@nuxtjs/style-resources'
    ],

    // The <head> of <html>
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

    // Global SASS Resources - No output styles! (This is needed for recognizing sass-variables in components).
    styleResources: {
        scss: [
            './global/styles/_resources.scss' // use underscore "_" & also file extension ".scss"
        ]
    },

    // All Global Styles - to be loaded when running Nuxt. 
    css: [
        '@/global/styles/global.scss',
    ],

    // Build configuration
    build: {
        // Extract CSS from the html 
        // when generating a prototype output for production
        extractCSS: process.env.NODE_ENV === 'production',
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        }
    }
}
