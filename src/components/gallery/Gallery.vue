<template>
    <div>
        <h2>Gallery</h2>
        <Button text="Open Gallery" url="#" :onclick="GetGallery" theme="primary" />
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