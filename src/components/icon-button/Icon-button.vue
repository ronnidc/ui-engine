<template>
    <button :class="'icon-button icon-style-' + icon + ' color-style-' + color">{{text}}</button>
</template>
<script>

    export default {
        props: ['icon', 'text', 'color']
    };
    
</script>

<style lang="scss">
    @import "./icon-button.scss";
</style>