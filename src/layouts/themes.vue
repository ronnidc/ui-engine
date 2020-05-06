<template>
    <div class="layout-themes">
        <Header />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
    import * as themeConfig from '~/global/styles/themes/theme.config.js';
    import Header from "~/components/header/Header.vue";
    import Footer from "~/components/footer/Footer.vue";

    export default {
    components: {
        Header,
        Footer
    },
    head: {
        bodyAttrs: {
            class: "theme-" + themeConfig.theme
        }
    }
    };
</script>

<style lang="scss">
    @import "~/global/styles/themes/audi/theme-import.scss";
    @import "~/global/styles/themes/seat/theme-import.scss";

    .layout-themes {
        min-height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;

        .theme-note {
            text-align: center;
            font-family: var(--font-family-primary);
        }
    }
</style>
