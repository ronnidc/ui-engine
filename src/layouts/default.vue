<template>
    <div class="layout-default">
        <Header />
        <main>
            <nuxt />
            <Googlemaps />
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from "~/components/header/Header.vue";
    import Footer from "~/components/footer/Footer.vue";

    export default {
        components: {
            Header, 
            Footer
        }
    };
</script>

<style lang="scss">

    .layout-default {
        min-height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        
        main {
            display: flex;
            text-align: center;
            align-items: center;
        }
    }

</style>
