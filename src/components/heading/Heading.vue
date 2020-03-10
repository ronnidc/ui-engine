<template>
    <section class="heading" role="heading">
        <div class="container">
            <h1 class="title">{{ title }}</h1>
            <h2 class="subtitle">{{ subtitle }}</h2>
        </div>
    </section>
</template>
<script>

    export default {
        props: ['title', 'subtitle']
    };
    
</script>

<style lang="scss">
    @import "./heading.scss";
</style>