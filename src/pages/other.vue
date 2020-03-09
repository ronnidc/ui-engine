<template>
    <Fragment>
        <h1>This page is using the <em>layout: 'minimal'</em></h1>
        <h2>This page is also using the <em>vue-fragment</em></h2>
        <p>This <strong>layout</strong> has no header but this <strong>page</strong> imports the navigation component below</p>
        <Navigation />
    </Fragment>
</template>

<script>
    import Navigation from "~/components/navigation/Navigation.vue";
    import { Fragment } from 'vue-fragment'
    export default {
        layout: 'minimal',
        components: { 
            Fragment, 
            Navigation
        }
    }
</script>

<style lang="scss" scoped>
    h1, h2, nav, p {
        margin: 20px auto;
        max-width: 800px;
    }
</style>