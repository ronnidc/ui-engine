<template>
    <main role="main">
        <Heading :title="heading.title" :subtitle="heading.subtitle" :textsize="heading.titleSize" />
        <img :src="`images/themes/${logo.brand}/logo.png`" alt="Audi Logo" class="brand-logo" />
        <p class="theme-note"> Using the layout: <strong>themes</strong></p>
    </main>
</template>

<script>
    import * as themeConfig from '~/global/styles/themes/theme.config.js';
    import Heading from "~/components/heading/Heading.vue";

    export default {
        layout: 'themes',
        components: {
            Heading
        }, 
        data () {
            return {
                heading: {
                    title: 'Brand Page', 
                    subtitle: 'A theme feature for the ui-designer', 
                    titleSize: 'small'
                },
                logo: {
                    brand: themeConfig.theme
                }
            }
        }
    };
</script>
