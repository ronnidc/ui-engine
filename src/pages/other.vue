<template>
    <main role="main">
        <Heading :title="heading.title" :subtitle="heading.subtitle" />
        <Googlemaps />
    </main>
</template>

<script>
    import Heading from "~/components/heading/Heading.vue";
    import Googlemaps from "~/components/googlemaps/Googlemaps.vue";
    export default {
        components: { 
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