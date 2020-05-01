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
                    title: 'Brand Page', 
                    subtitle: 'A theme feature for the ui-designer', 
                    titleSize: 'huge'
                }
            }
        }
    };
</script>
