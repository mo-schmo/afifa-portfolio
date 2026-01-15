<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Education from "$lib/components/Education.svelte";
    import Experience from "$lib/components/Experience.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Contact from "$lib/components/Contact.svelte";
</script>

<svelte:head>
    <title>Afifa Nusrat | Biomedical Engineering Portfolio</title>
    <meta
        name="description"
        content="Portfolio of Afifa Nusrat, Biomedical Engineering Graduate & R&D Specialist."
    />
</svelte:head>

<main class="min-h-screen pb-20 overflow-x-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        <div
            class="space-y-32 my-20 p-8 md:p-12 bg-white lace-border shadow-sm"
        >
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </div>

        <footer class="mt-32 text-center py-12 border-t border-soft-charcoal/5">
            <p class="font-montserrat text-soft-charcoal/40 text-sm">
                &copy; 2025 Afifa Nusrat. Designed with <span
                    class="text-romance-red">♥</span
                > in the Engineering Journal.
            </p>
        </footer>
    </div>
</main>

<style>
    main {
        background-color: var(--color-blush-white);
        background-image: linear-gradient(
                rgba(244, 194, 194, 0.05) 1px,
                transparent 1px
            ),
            linear-gradient(
                90 binary,
                rgba(244, 194, 194, 0.05) 1px,
                transparent 1px
            );
        background-size: 40px 40px;
    }
</style>
