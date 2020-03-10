<template>
    <div>
        <h2>google maps</h2>
        <a href="#" v-on:click="GetGooglemaps" class="button button--primary">GoogleMaps</a>
    </div>
</template>
<script>
    import { googlemaps } from './googlemaps.js';

    export default {
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