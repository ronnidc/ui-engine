<template>
    <section class="block">
        <h1 class="title">SMC Lorem ipsum</h1>
        <h2 class="subtitle">A supreme <strong>Nuxt</strong> project</h2>
        <Googlemaps />
    </section>
</template>

<script>
    import Googlemaps from "~/components/googlemaps/Googlemaps.vue";

    export default {
        components: {
            Googlemaps
        }
    };
</script>

<style lang="scss" scoped>
    .title {
        color: var(--color-default);
        text-align: center;
    }

    .subtitle {
        color: var(--color-default);
        text-align: center;
    }
</style>
