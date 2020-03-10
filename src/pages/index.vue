<template>
    <Fragment>
        <Heading :title="heading.title" :subtitle="heading.subtitle" />
    </Fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import Heading from "~/components/heading/Heading.vue";

    export default {
        components: {
            Fragment, 
            Heading
        }, 
        data () {
            return {
                heading: {
                    title: 'SMC Lorem ipsum', 
                    subtitle: 'A supreme Nuxt project'
                }
            }
        }
    };
</script>
