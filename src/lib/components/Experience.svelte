<script lang="ts">
    import { fade, scale } from "svelte/transition";
    import { portal } from "$lib/actions/portal";

    let selectedExperience: any = $state(null);
    let showModal = $state(false);

    const experiences = [
        {
            title: "MTF Biologics (R&D Co-op)",
            date: "Jan 2024 - June 2024",
            details: "Analyzed immunoassays and created Power BI dashboards.",
            moreDetails: [
                "Conducted detailed data analysis on immunoassays and preclinical studies, summarizing key findings using Power BI.",
                "Developed dynamic reporting tools to support critical business strategy and research prioritization efforts.",
                "Cross-functional collaboration with R&D, quality, and regulatory teams to ensure alignment with business objectives.",
                "Benchmarked scientific methodologies against competitive and peer-reviewed stands to optimize experimental design protocols.",
            ],
            style: "card",
            accent: "tulip-pink",
        },
        {
            title: "Valley Bank (Personal Banker)",
            date: "Dec 2021 - Present",
            details:
                "Promoted financial products and strategized sales techniques.",
            moreDetails: [
                "Assisted customers with setting/closing accounts, loan applications, and signing up for new services.",
                "Promoted financial products best suited for each customer's needs.",
                "Collaborated with management to strategize sales techniques, resulting in increased branch production and customer satisfaction.",
                "Utilized Microsoft Office Suite, including Excel and PowerPoint, to create presentations and reports.",
            ],
            style: "receipt",
            accent: "antique-gold",
        },
    ];

    function openModal(exp: any) {
        selectedExperience = exp;
        showModal = true;
    }

    function closeModal() {
        showModal = false;
        selectedExperience = null;
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Escape") closeModal();
    }
</script>

<svelte:window onkeydown={handleKeydown} />

<section class="max-w-5xl mx-auto p-8 my-16">
    <h2 class="text-4xl font-playfair mb-16 text-center text-soft-charcoal">
        The Journey
    </h2>

    <div class="relative">
        <!-- Vertical Stitching Line -->
        <div
            class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l-4 border-dashed border-soft-charcoal/20 z-0 h-full"
        ></div>

        <div class="space-y-20">
            {#each experiences as exp, i}
                <div
                    class="relative flex items-start {i % 2 === 0
                        ? 'flex-row-reverse'
                        : ''} gap-8"
                >
                    <!-- Connector Point -->
                    <div
                        class="absolute left-1/2 -translate-x-1/2 mt-6 w-4 h-4 bg-romance-red rounded-full shadow-md z-10 border-2 border-white"
                    ></div>

                    <!-- Date on the axis side -->
                    <div
                        class="w-5/12 hidden md:flex items-center pt-5 {i %
                            2 ===
                        0
                            ? 'justify-start'
                            : 'justify-end'}"
                    >
                        <span
                            class="font-montserrat font-bold text-soft-charcoal/60 bg-white/50 px-2 py-1 rounded-md backdrop-blur-sm"
                        >
                            {exp.date}
                        </span>
                    </div>

                    <!-- Card Container -->
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div
                        class="w-full md:w-5/12 cursor-pointer outline-none focus:ring-2 focus:ring-tulip-pink rounded-sm group"
                        onclick={() => openModal(exp)}
                        tabindex="0"
                    >
                        <div
                            class="{exp.style === 'receipt'
                                ? 'bg-[#f8f8f8] border-t-4 border-antique-gold'
                                : 'bg-white border-2 border-gray-100'} p-6 rounded-sm shadow-lg transform transition-all duration-300 z-20 overflow-hidden relative hover:-translate-y-2 hover:shadow-xl"
                        >
                            {#if exp.style === "card"}
                                <div
                                    class="absolute -top-2 -right-2 transform rotate-12 transition-transform group-hover:rotate-6"
                                >
                                    <span class="text-2xl">📎</span>
                                </div>
                            {/if}

                            <h3
                                class="text-xl font-playfair font-bold text-soft-charcoal mb-2"
                            >
                                {exp.title}
                            </h3>

                            <!-- Mobile date -->
                            <p
                                class="md:hidden text-sm font-montserrat text-romance-red font-medium mb-3"
                            >
                                {exp.date}
                            </p>

                            <p
                                class="font-montserrat text-soft-charcoal/80 leading-relaxed font-semibold transition-all"
                            >
                                {exp.details}
                            </p>

                            <div class="mt-4 flex justify-end">
                                <span
                                    class="text-xs text-soft-charcoal/40 font-bold uppercase tracking-wider group-hover:text-romance-red transition-colors"
                                >
                                    View Details &rarr;
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Modal -->
{#if showModal && selectedExperience}
    <div
        use:portal
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-soft-charcoal/50 backdrop-blur-sm"
        transition:fade={{ duration: 200 }}
        onclick={closeModal}
        role="button"
        tabindex="-1"
    >
        <div
            class="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-8 border-t-8 {selectedExperience.accent ===
            'tulip-pink'
                ? 'border-tulip-pink'
                : 'border-antique-gold'}"
            transition:scale={{ duration: 200, start: 0.95 }}
            onclick={(e) => e.stopPropagation()}
            role="button"
            tabindex="0"
        >
            <button
                onclick={closeModal}
                class="absolute top-4 right-4 text-soft-charcoal/40 hover:text-soft-charcoal transition-colors font-bold text-2xl leading-none"
            >
                &times;
            </button>

            <h3
                class="text-3xl font-playfair font-bold text-soft-charcoal mb-2"
            >
                {selectedExperience.title}
            </h3>
            <p class="text-lg font-montserrat text-romance-red font-bold mb-6">
                {selectedExperience.date}
            </p>

            <div class="prose prose-stone max-w-none">
                <p class="text-lg text-soft-charcoal/80 mb-6 font-medium">
                    {selectedExperience.details}
                </p>

                <h4
                    class="font-playfair font-bold text-xl mb-3 border-b border-gray-100 pb-2"
                >
                    Key Achievements
                </h4>
                <ul class="list-disc pl-5 space-y-3 text-soft-charcoal/70">
                    {#each selectedExperience.moreDetails as detail}
                        <li>{detail}</li>
                    {/each}
                </ul>
            </div>

            <div class="mt-8 flex justify-end">
                <button
                    onclick={closeModal}
                    class="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-soft-charcoal font-bold rounded-full transition-colors font-montserrat text-sm uppercase tracking-wide"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
{/if}
