<template>
    <Fragment>
        <section class="block">
            <h1 class="title">Another page</h1>
            <h2 class="subtitle">Something <strong>else</strong>!</h2>
            <Googlemaps />
        </section>
    </Fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import Googlemaps from "~/components/googlemaps/Googlemaps.vue";
    export default {
        components: { 
            Fragment,
            Googlemaps
        }
    }
</script>