<template>
    <header class="header">
        <Logo />
        <Navigation />
    </header>
</template>

<script>
    import Logo from "~/components/Logo/Logo.vue";
    import Navigation from "~/components/Navigation/Navigation.vue";

    export default {
        components: {
            Logo, 
            Navigation
        }
    };
</script>

<style lang="scss" scoped>
    @import "./header.scss";
</style>