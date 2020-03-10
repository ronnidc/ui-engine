<template>
    <main role="main">
        <Heading :title="heading.title" :subtitle="heading.subtitle" />
    </main>
</template>

<script>
    import Heading from "~/components/heading/Heading.vue";

    export default {
        components: {
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
