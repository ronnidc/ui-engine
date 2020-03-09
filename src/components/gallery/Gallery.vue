<template>
    <div>
        <h2>Gallery</h2>
        <!--Button text="Open Gallery" url="#" v-on:click.native="GetGallery" theme="primary" /-->
        <a href="#" v-on:click="GetGallery" class="button button--primary">Open Gallery</a>
    </div>
</template>
<script>
    import { gallery } from './gallery.js';
    import Button from "~/components/button/Button.vue";

    export default {
        components: {
            Button
        }, 
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