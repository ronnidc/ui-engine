<template>
    <section class="googlemaps">
        <div class="container">
            <h2>google maps</h2>
            <a v-on:click="GetGooglemaps" class="button button--primary">GoogleMaps</a>
        </div>
    </section>
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