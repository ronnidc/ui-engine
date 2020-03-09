<template>
    <nav class="navigation">
        <Button text="Frontpage" url="/" theme="primary" />
        <Button :text="message" url="/semler" theme="primary" />
        <Button text="Other" url="/other" theme="primary" />
        <Button text="Why" url="/why" theme="primary" />
        <Button text="Function" url="#" :onclick="getNavigation" theme="secondary" />
        <Button text="Documentation" url="https://nuxtjs.org/" theme="secondary" target="_blank" rel="noreferrer" />
    </nav>
</template>

<script>
    import { navigation } from './navigation.js';
    import Button from "~/components/button/Button.vue";

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
        }, 
        created () {
        }, 
        beforeUpdate () {
        },
    };
    
</script>

<style lang="scss">
    @import "./navigation.scss";
</style>