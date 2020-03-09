<template>
    <a :href="url" :class="'button button--' + theme">{{ text }}</a>
</template>

<script>
    export default {
        props: ['text', 'url', 'theme']
    }
</script>

<style lang="scss">
  @import "./button.scss"
</style>
