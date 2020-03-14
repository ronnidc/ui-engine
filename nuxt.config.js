export default {
    mode: 'universal',

    srcDir: 'src/',

    generate: {
        dir: './dist/generated-prototype',
    },

    router: {
        //base: '/poc/ui-engine/'
    },

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

    // Global CSS
    css: [
        '@/global/styles/global.scss',
    ],

    // Build configuration
    build: {
        // Extract CSS from the html 
        // when generating a prototype output for production
        extractCSS:  process.env.NODE_ENV === 'production',
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
