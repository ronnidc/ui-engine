<template>
    <div>
        <h2>google maps</h2>
        <Button text="GoogleMaps" url="#" v-on:click.native="GetGooglemaps" theme="primary" />
    </div>
</template>
<script>
    import { googlemaps } from './googlemaps.js';
    import Button from "~/components/button/Button.vue";

    export default {
        components: {
            Button
        }, 
        methods: {
            GetGooglemaps: function() {
                googlemaps();
            }
        }
    };
    
</script>

<style lang="scss">
    @import "./googlemaps.scss";
</style>