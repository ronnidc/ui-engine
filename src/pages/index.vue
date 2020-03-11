<template>
    <main role="main">
        <Heading :title="heading.title" :subtitle="heading.subtitle" :textsize="heading.titleSize" />
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
                    title: 'ui-engine', 
                    subtitle: 'A prototyping tool based on Vue.js & Nuxt', 
                    titleSize: 'huge'
                }
            }
        }
    };
</script>
