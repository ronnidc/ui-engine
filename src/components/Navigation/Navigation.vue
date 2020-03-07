<template>
    <nav class="navigation">
        <Button text="Frontpage" url="/" theme="primary" />
        <Button :text="message" url="/semler" theme="primary" />
        <Button text="Other" url="/other" theme="primary" />
        <Button text="Why" url="/why" theme="primary" />
        <Button text="Function" url="#" v-on:click="getNavigation" theme="secondary" />
        <Button text="Documentation" url="https://nuxtjs.org/" theme="secondary" target="_blank" rel="noreferrer" />
        <a href="#" v-on:click="getNavigation">function</a>
    </nav>
</template>

<script>
    import { navigation } from './navigation.js';
    import Button from "~/components/Button/Button.vue";

    export default {
        components: {
            Button
        }, 
        data () {
            return {
                // Data can also be asigned here
                message: 'Morten Semler'
            }
        }, 
        methods: {
            getNavigation: function() {
                // Output script from navigation.js
                navigation();
            }
        }
    };
    
</script>

<style lang="scss">
    @import "./navigation.scss";
</style>