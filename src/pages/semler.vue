<template>
    <main role="main">
        <Heading :title="heading.title" :subtitle="heading.subtitle" />
        <Gallery />
    </main>
</template>

<script>
    import Heading from "~/components/heading/Heading.vue";
    import Gallery from "~/components/gallery/Gallery.vue";
    export default {
        components: { 
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
