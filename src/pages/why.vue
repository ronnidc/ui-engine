<template>
    <main role="main">
        <Heading :title="heading.title" :subtitle="heading.subtitle" />
        <ul class="costum-why-list">
            <li>Bedre og hurtigere build setup, så Mads ikke dagligt skal tortureres med Gulp</li>
            <li>Undgå output filer i GIT (som er uundgåeligt med Jekyll), så commits, puls requests og kodebasen generelt bliver mere overskuelig, og disse daglige tasks kan afvikles hurtigere. </li>
            <li>Et super lækkert og lynende hurtigt arbejdsflow med Hot Module Replacement (HMR) - hvilket kort fortalt betyder, at siden ikke reloader, når vi klikker save i vores editor. Hverken ved html, css, eller js ændringer. </li>
            <li>På sigt og I samarbejde med backend at få et bedre output i form af en bedre opdeling af css og js (code splitting) = bedre performance = bedre brugeroplevelse. </li>
            <li>100% komponent baseret - eller så tæt på som muligt. En komponent skal kunne flyttes fra en løsning til en anden på få minutter i stedet for på flere dage. </li>
            <li>At nemmere kunne undgå inkludering af tredjeparts libraries som jQuery, Bootstrap, Normalize, og diverse polyfils, så vidt det er muligt, da disse libraries’ forskellige versioner skaber en ekstra afhængighed til den specifikke løsning, hvilket gør det sværere at genbruge komponenter på tværs af løsninger. Dernæst inkluderes disse libraries i outputtet der sendes til klienten, hvilket skaber performance issues.</li>
        </ul>
    </main>
</template>

<script>
    import Heading from "~/components/heading/Heading.vue";
    export default {
        components: { 
            Heading
        }, 
        data () {
            return {
                heading: {
                    title: 'Formålet med ui-engine', 
                    subtitle: 'Lynende hurtigt arbejdsflow og bedre build setup'
                }
            }
        }
    }
</script>

<style lang="scss">
    ul.costum-why-list {
        font-family: var(--font-family-primary);
        line-height: 1.5;
        font-size: 20px;
        max-width: 800px;
        margin: 2em auto;
        
        li {
            margin-bottom: 1em;
        }
    }
</style>