<template>
    <a :href="url" :class="'button button--' + theme" v-on:click="onclick">{{ text }}</a>
</template>

<script>
    export default {
        props: ['text', 'url', 'theme', 'onclick']
    }
</script>

<style lang="scss">
  @import "./button.scss"
</style>
