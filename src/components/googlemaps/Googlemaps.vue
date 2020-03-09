<template>
    <div>
        <h2>google maps</h2>
        <Button text="GoogleMaps" url="#" :onclick="GetGooglemaps" theme="primary" />
    </div>
</template>
<script>
    import { googlemaps } from './googlemaps.js';
    import Button from "~/components/Button/Button.vue";

    export default {
        components: {
            Button
        }, 
        methods: {
            GetGooglemaps: function() {
                googlemaps();
            }
        }, 
        created () {
        }, 
        beforeUpdate () {
        },
    };
    
</script>

<style lang="scss">
    @import "./googlemaps.scss";
</style>