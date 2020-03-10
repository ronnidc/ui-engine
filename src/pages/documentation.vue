<template>
    <Fragment>
        <section class="block">
            <h1 class="title">Documentation</h1>
            <h2 class="subtitle">Some useful <strong>links</strong></h2>
            <!--Button text="nuxtjs.org" url="//nuxtjs.org/" theme="primary" target="_blank" rel="noreferrer" />
            <Button text="forum.vuejs.org" url="https://forum.vuejs.org/t/greetings/89238" theme="primary" target="_blank" rel="noreferrer" />
            <Button text="Discordapp Vue Land" url="https://discordapp.com/channels/325477692906536972/325654285255704578" theme="primary" target="_blank" rel="noreferrer" /-->
            <a href="//nuxtjs.org/" class="button button--primary" target="_blank" rel="noreferrer">nuxtjs.org</a>
            <a href="//forum.vuejs.org/t/greetings/89238" class="button button--primary" target="_blank" rel="noreferrer">forum.vuejs.org</a>
            <a href="https://discordapp.com/channels/325477692906536972/325654285255704578" class="button button--primary" target="_blank" rel="noreferrer">Discordapp Vue Land</a>
        </section>
    </Fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    //import Button from "~/components/button/Button.vue";
    export default {
        components: { 
            Fragment
            //,Button
        }
    }
</script>