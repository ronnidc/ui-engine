<template>
    <div class="layout-error-page">
        <section>
            <h1 class="title">Error</h1>
            <h2 class="subtitle">There has been an error</h2>
        </section>
    </div>
</template>

<style lang="scss">
    .layout-error-page {
        margin: 0 auto;
        min-height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        .title {
            font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            display: block;
            font-weight: 300;
            font-size: 100px;
            color: #35495e;
            letter-spacing: 1px;
            color: darkmagenta;
        }

        .subtitle {
            font-weight: 300;
            font-size: 42px;
            color: #526488;
            word-spacing: 5px;
            padding-bottom: 15px;
        }
    }
</style>
