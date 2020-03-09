<template>
    <nav class="navigation">
        <nuxt-link to="/" class="navigation__link">
            Frontpage
        </nuxt-link>
        <nuxt-link to="/semler" class="navigation__link">
            {{ buttonText }}
        </nuxt-link>
        <nuxt-link to="/other" class="navigation__link">
            Other
        </nuxt-link>
        <a href="https://nuxtjs.org/" class="navigation__link" target="_blank" rel="noreferrer">
            Documentation
        </a>
    </nav>
</template>

<script>

    export default {
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