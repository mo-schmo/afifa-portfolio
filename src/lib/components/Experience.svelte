<script lang="ts">
    import { fade, slide } from "svelte/transition";

    let expandedIndex: number | null = $state(null);

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

    function toggleExpand(index: number) {
        if (expandedIndex === index) {
            expandedIndex = null;
        } else {
            expandedIndex = index;
        }
    }

    function handleKeydown(event: KeyboardEvent, index: number) {
        if (event.key === "Enter" || event.key === " ") {
            toggleExpand(index);
        }
    }
</script>

<section class="max-w-4xl mx-auto p-8 my-16">
    <h2 class="text-4xl font-playfair mb-12 text-center text-soft-charcoal">
        The Journey
    </h2>

    <div class="relative">
        <!-- Vertical Stitching Line -->
        <div
            class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l-4 border-dashed border-soft-charcoal/20 z-0"
        ></div>

        <div class="space-y-12">
            {#each experiences as exp, i}
                <div
                    class="relative flex items-center {i % 2 === 0
                        ? 'flex-row-reverse'
                        : ''} gap-8"
                >
                    <!-- Connector Point -->
                    <div
                        class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-romance-red rounded-full shadow-md z-10 border-2 border-white"
                    ></div>

                    <!-- Card Container -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div
                        class="w-full md:w-5/12 cursor-pointer outline-none focus:ring-2 focus:ring-tulip-pink rounded-sm"
                        onclick={() => toggleExpand(i)}
                        onkeydown={(e) => handleKeydown(e, i)}
                        tabindex="0"
                    >
                        <div
                            class="{exp.style === 'receipt'
                                ? 'bg-[#f8f8f8] border-t-4 border-antique-gold'
                                : 'bg-white border-2 border-gray-100'} p-6 rounded-sm shadow-lg transform transition-all duration-300 z-20 overflow-hidden relative hover:-translate-y-1 hover:shadow-xl"
                        >
                            {#if exp.style === "card"}
                                <div
                                    class="absolute -top-2 -right-2 transform rotate-12"
                                >
                                    <span class="text-2xl">📎</span>
                                </div>
                            {/if}

                            <div class="flex justify-between items-start mb-2">
                                <h3
                                    class="text-xl font-playfair font-bold text-soft-charcoal"
                                >
                                    {exp.title}
                                </h3>
                            </div>

                            <p
                                class="text-sm font-montserrat text-romance-red font-medium mb-3"
                            >
                                {exp.date}
                            </p>

                            <p
                                class="font-montserrat text-soft-charcoal/80 leading-relaxed font-semibold transition-all"
                            >
                                {exp.details}
                            </p>

                            {#if expandedIndex === i}
                                <div
                                    transition:slide={{ duration: 300 }}
                                    class="mt-4 pt-4 border-t border-gray-100"
                                >
                                    <ul
                                        class="list-disc pl-5 space-y-2 text-sm text-soft-charcoal/70"
                                    >
                                        {#each exp.moreDetails as detail}
                                            <li>{detail}</li>
                                        {/each}
                                    </ul>
                                </div>
                            {/if}

                            {#if exp.style === "receipt"}
                                <div
                                    class="mt-4 border-t border-dashed border-gray-300 pt-2 flex justify-between items-center opacity-60 font-mono text-xs"
                                >
                                    <span>TXN: {exp.date.split(" ")[0]}</span>
                                    <span
                                        >{expandedIndex === i
                                            ? "EXPANDED"
                                            : "CLICK FOR INFO"}</span
                                    >
                                </div>
                            {:else}
                                <div class="mt-4 flex justify-end">
                                    <span
                                        class="text-xs text-soft-charcoal/40 font-bold uppercase tracking-wider"
                                    >
                                        {expandedIndex === i ? "Less" : "More"}
                                    </span>
                                </div>
                            {/if}
                        </div>
                    </div>

                    <div class="hidden md:block md:w-5/12"></div>
                </div>
            {/each}
        </div>
    </div>
</section>
