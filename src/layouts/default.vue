<template>
    <div class="layout-theme">
        <PageHeader />
        <main>
            <nuxt />
            <Googlemaps />
        </main>
        <PageFooter />
    </div>
</template>

<script>
    import PageHeader from "~/components/header/Header.vue";
    import PageFooter from "~/components/footer/Footer.vue";
    import Googlemaps from "~/components/googlemaps/Googlemaps.vue";

    export default {
        components: {
            PageHeader, 
            PageFooter, 
            Googlemaps
        }
    };
</script>

<style lang="scss" scoped>
    @import "./default.scss";
</style>
