<template>
    <nav class="navigation">
        <Button text="Frontpage" url="/" theme="primary" />
        <Button :text="buttonText" url="/semler" theme="primary" />
        <Button text="Other" url="/other" theme="primary" />
        <Button text="Documentation" url="https://nuxtjs.org/" theme="secondary" target="_blank" rel="noreferrer" />
    </nav>
</template>

<script>
    import Button from "~/components/button/Button.vue";

    export default {
        components: {
            Button
        },
        data () {
            return {
                buttonText: 'Mobility Tech'
            }
        }
    };
    
</script>

<style lang="scss">
    @import "./navigation.scss";
</style>