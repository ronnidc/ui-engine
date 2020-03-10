<template>
    <div>
        <h2>Gallery</h2>
        <a v-on:click="GetGallery" class="button button--primary">Open Gallery</a>
    </div>
</template>
<script>
    import { gallery } from './gallery.js';

    export default {
        methods: {
            GetGallery: function() {
                gallery();
            }
        }
    };
    
</script>

<style lang="scss">
    @import "./gallery.scss";
</style>