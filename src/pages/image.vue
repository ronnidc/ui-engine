<template>
    <main role="main" class="image-page-main">
        <Heading :title="heading.title" :subtitle="heading.subtitle" :textsize="heading.titleSize" />
        <img src="~assets/images/nature-engine.jpg" alt="assets" width="400" border="1" />
        <img src="images/nature-engine.jpg" alt="static" width="400" border="1" />
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
                    title: 'Image', 
                    subtitle: 'Using images with Nuxt and Webpack', 
                    titleSize: 'huge'
                }
            }
        }
    };
</script>
