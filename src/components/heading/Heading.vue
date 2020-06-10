<template>
    <section class="heading">
        <div class="container">
            <h1 :class="'title ' + textsize">{{ title }}</h1>
            <h2 class="subtitle">{{ subtitle }}</h2>
        </div>
    </section>
</template>
<script>

    export default {
        props: ['title', 'subtitle', 'textsize']
    };
    
</script>

<style lang="scss">
    @import "./heading.scss";
</style>