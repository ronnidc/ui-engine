<template>
    <main role="main">
        <Heading :title="heading.title" :subtitle="heading.subtitle" :textsize="heading.titleSize" />
        <p class="theme-note"> Using the layout: <strong>themes</strong></p>
    </main>
</template>

<script>
    import Heading from "~/components/heading/Heading.vue";

    export default {
        layout: 'themes',
        components: {
            Heading
        }, 
        data () {
            return {
                heading: {
                    title: 'Theme Page', 
                    subtitle: 'A theme feature for the ui-designer', 
                    titleSize: 'huge'
                }
            }
        }
    };
</script>
