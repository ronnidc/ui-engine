<template>
    <div class="layout-theme">
        <PageHeader />
        <main>
            <nuxt />
        </main>
        <PageFooter />
    </div>
</template>

<script>
    import PageHeader from "~/components/Header/Header.vue";
    import PageFooter from "~/components/Footer/Footer.vue";

    export default {
        components: {
            PageHeader, 
            PageFooter
        }
    };
</script>

<style lang="scss" scoped>
    @import "./default.scss";
</style>
