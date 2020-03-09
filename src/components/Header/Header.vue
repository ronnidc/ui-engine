<template>
    <header class="header">
        <Logo />
        <Navigation />
    </header>
</template>

<script>
    import Logo from "~/components/logo/Logo.vue";
    import Navigation from "~/components/navigation/Navigation.vue";

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