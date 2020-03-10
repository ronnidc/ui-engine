<template>
    <Fragment>
        <Heading :title="heading.title" :subtitle="heading.subtitle" />
        <Gallery />
    </Fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import Heading from "~/components/heading/Heading.vue";
    import Gallery from "~/components/gallery/Gallery.vue";
    export default {
        components: { 
            Fragment, 
            Gallery, 
            Heading
        }, 
        data () {
            return {
                heading: {
                    title: 'Semler Tech', 
                    subtitle: 'Semler Mobility Tech'
                }
            }
        }
    }
</script>
