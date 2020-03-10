<template>
    <Fragment>
        <Heading :title="heading.title" :subtitle="heading.subtitle" />
        <center>
            <a href="//nuxtjs.org/" class="button button--primary" target="_blank" rel="noreferrer">nuxtjs.org</a>
            <a href="//forum.vuejs.org/t/greetings/89238" class="button button--primary" target="_blank" rel="noreferrer">forum.vuejs.org</a>
            <a href="https://discordapp.com/channels/325477692906536972/325654285255704578" class="button button--primary" target="_blank" rel="noreferrer">Discordapp Vue Land</a>
        </center>
    </Fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import Heading from "~/components/heading/Heading.vue";
    export default {
        components: { 
            Fragment, 
            Heading
        }, 
        data () {
            return {
                heading: {
                    title: 'Documentation', 
                    subtitle: 'Some useful links'
                }
            }
        }
    }
</script>