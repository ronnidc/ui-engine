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
        <nuxt-link to="/documentation" class="navigation__link">
            Documentation
        </nuxt-link>
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