<script lang="ts">
    const experiences = [
        {
            title: "MTF Biologics (R&D Co-op)",
            details: "Analyzed immunoassays and created Power BI dashboards.",
            style: "card",
            accent: "tulip-pink",
        },
        {
            title: "Valley Bank (Personal Banker)",
            details:
                "Promoted financial products and strategized sales techniques.",
            style: "receipt",
            accent: "antique-gold",
        },
    ];
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

                    <div
                        class="w-full md:w-5/12 {exp.style === 'receipt'
                            ? 'bg-[#f8f8f8] border-t-4 border-antique-gold'
                            : 'bg-white border-2 border-gray-100'} p-6 rounded-sm shadow-lg transform hover:-translate-y-1 transition-transform z-20 overflow-hidden"
                    >
                        {#if exp.style === "card"}
                            <div
                                class="absolute -top-2 -right-2 transform rotate-12"
                            >
                                <span class="text-2xl">📎</span>
                            </div>
                        {/if}

                        <h3
                            class="text-xl font-playfair font-bold text-soft-charcoal mb-2"
                        >
                            {exp.title}
                        </h3>
                        <p
                            class="font-montserrat text-soft-charcoal/80 leading-relaxed font-semibold"
                        >
                            {exp.details}
                        </p>

                        {#if exp.style === "receipt"}
                            <div
                                class="mt-4 border-t border-dashed border-gray-300 pt-2 flex justify-between items-center opacity-60 font-mono text-xs"
                            >
                                <span>TXN: 0925-2025</span>
                                <span>AUTHENTICATED</span>
                            </div>
                        {/if}
                    </div>

                    <div class="hidden md:block md:w-5/12"></div>
                </div>
            {/each}
        </div>
    </div>
</section>
