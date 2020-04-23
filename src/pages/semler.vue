<template>
    <main role="main">

        <Heading title="Semler Tech" subtitle="Semler Mobility Tech" />

        <Gallery />

        <section>
            <div class="container semler-page-container ">
                <IconButton icon="external" color="gray" text="External Link" />
                <IconButton icon="download" color="black" text="Get the stuff" />
                <IconButton icon="next" color="orange" text="Going forward" />
            </div>
        </section>

    </main>
</template>

<script>
    import Heading from "~/components/heading/Heading.vue";
    import Gallery from "~/components/gallery/Gallery.vue";
    import IconButton from "~/components/icon-button/Icon-button.vue";
    export default {
        components: { 
            IconButton,
            Gallery, 
            Heading
        }
    }
</script>

<style lang="scss">
    .semler-page-container {
        text-align: center;
        padding-top: 2em;
        button {
            margin: 0 1em;
        }
    }
</style>
