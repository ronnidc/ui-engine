<template>
    <div class="layout-default">
        <Header />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
    import Header from "~/components/header/Header.vue";
    import Footer from "~/components/footer/Footer.vue";

    export default {
    components: {
        Header,
        Footer
    },
    head: {
        bodyAttrs: {
            class: "theme-audi"
        }
    }
    };
</script>

<style lang="scss">
    @import "~/global/styles/themes/audi/theme.audi.scss";
    @import "~/global/styles/themes/seat/theme.seat.scss";

    .layout-default {
        min-height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
</style>
