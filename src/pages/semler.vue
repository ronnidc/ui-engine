<template>
    <Fragment>
        <section class="block">
            <h1 class="title">Semler Tech</h1>
            <h2 class="subtitle">Semler Mobility Tech</h2>
            <Gallery />
        </section>
    </Fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import Gallery from "~/components/gallery/Gallery.vue";
    export default {
        components: { 
            Fragment, 
            Gallery
        }
    }
</script>
