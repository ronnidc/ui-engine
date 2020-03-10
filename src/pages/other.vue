<template>
    <Fragment>
        <Heading :title="heading.title" :subtitle="heading.subtitle" />
        <Googlemaps />
    </Fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import Heading from "~/components/heading/Heading.vue";
    import Googlemaps from "~/components/googlemaps/Googlemaps.vue";
    export default {
        components: { 
            Fragment,
            Googlemaps, 
            Heading
        }, 
        data () {
            return {
                heading: {
                    title: 'Another page', 
                    subtitle: 'Something else!'
                }
            }
        }
    }
</script>