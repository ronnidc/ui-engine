<template>
    <nav class="navigation">
        <Button text="Frontpage" url="/" theme="primary" />
        <Button text="Semler Tech" url="/semler" theme="primary" />
        <Button text="Documentation" url="https://nuxtjs.org/" theme="secondary" target="_blank" />
    </nav>
</template>

<script>
    import Button from "~/components/Button/Button.vue";

    export default {
        components: {
            Button
        }
    };
</script>

<style lang="scss">
    @import "./navigation.scss";
</style>