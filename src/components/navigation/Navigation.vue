<template>
    <nav class="navigation" role="navigation">
        <nuxt-link to="/" class="navigation__link">
            Frontpage
        </nuxt-link>
        <nuxt-link to="/semler" class="navigation__link">
            Mobility Tech
        </nuxt-link>
        <nuxt-link to="/image" class="navigation__link">
            Image
        </nuxt-link>
        <nuxt-link to="/why" class="navigation__link">
            Why
        </nuxt-link>
        <nuxt-link to="/brand-page" class="navigation__link">
            Brands
        </nuxt-link>
        <span class="navigation__spacer">&</span>
        <nuxt-link to="/theme-page" class="navigation__link">
            Themes
        </nuxt-link>
        <nuxt-link to="/documentation" class="navigation__link">
            Documentation
        </nuxt-link>
    </nav>
</template>

<style lang="scss">
    @import "./navigation.scss";
</style>