<script lang="ts">
    const coursework = [
        "Production Process Design",
        "Eng. Application of Data Science",
        "Eng for Quality and Reliability",
        "FDA Regulation of Biomedical Devices",
        "Differential Equations",
        "Medical Device Design",
        "Biomaterials",
        "Physiological Systems",
    ];
</script>

<section
    class="max-w-4xl mx-auto p-4 md:p-8 my-16 bg-white shadow-xl relative overflow-hidden group"
>
    <!-- Graph Paper Background Effect -->
    <div
        class="absolute inset-0 graph-paper pointer-events-none opacity-30"
    ></div>

    <!-- Top Technical Banner -->
    <div
        class="relative z-10 border-b-2 border-soft-charcoal mb-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
    >
        <div>
            <h2
                class="text-3xl md:text-4xl font-playfair font-bold text-soft-charcoal mb-2"
            >
                Technical Specifications
            </h2>
            <p
                class="font-montserrat text-sm text-soft-charcoal/70 uppercase tracking-widest border-l-4 border-romance-red pl-3"
            >
                Biomedical Engineering // B.S.
            </p>
        </div>
        <div class="text-right hidden md:block">
            <span class="font-mono text-xs text-soft-charcoal/50"
                >REF-2025-NJIT</span
            >
        </div>
    </div>

    <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Left Col: Key Specs -->
        <div
            class="md:col-span-5 border-2 border-soft-charcoal p-6 bg-white/80 backdrop-blur-sm"
        >
            <h3
                class="font-montserrat font-bold text-lg uppercase mb-6 text-center bg-soft-charcoal text-white py-1"
            >
                System Data
            </h3>

            <div class="space-y-6 font-mono text-sm">
                <div
                    class="flex justify-between items-end border-b border-soft-charcoal/20 pb-2"
                >
                    <span class="text-soft-charcoal/60 uppercase text-xs"
                        >University</span
                    >
                    <span class="font-bold text-romance-red text-right"
                        >NJIT<br /><span class="text-xs text-soft-charcoal"
                            >Newark, NJ</span
                        ></span
                    >
                </div>

                <div
                    class="flex justify-between items-end border-b border-soft-charcoal/20 pb-2"
                >
                    <span class="text-soft-charcoal/60 uppercase text-xs"
                        >Timeline</span
                    >
                    <span class="font-bold text-right">2021 — 2025</span>
                </div>

                <div
                    class="flex justify-between items-end border-b border-soft-charcoal/20 pb-2"
                >
                    <span class="text-soft-charcoal/60 uppercase text-xs"
                        >Concentration</span
                    >
                    <span class="font-bold text-right">Biomedical</span>
                </div>

                <div
                    class="flex justify-between items-end border-b border-soft-charcoal/20 pb-2"
                >
                    <span class="text-soft-charcoal/60 uppercase text-xs"
                        >Status</span
                    >
                    <span class="font-bold text-right text-green-600"
                        >COMPLETED</span
                    >
                </div>
            </div>

            <!-- Decorative Barcode/QR Placeholder -->
            <div class="mt-8 flex justify-center opacity-50">
                <div
                    class="h-8 w-full bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px)]"
                ></div>
            </div>
        </div>

        <!-- Right Col: Coursework Modules -->
        <div class="md:col-span-7">
            <div class="flex items-center gap-4 mb-6">
                <div class="h-[1px] bg-soft-charcoal flex-grow"></div>
                <h3
                    class="font-montserrat font-bold text-lg text-soft-charcoal uppercase shrink-0"
                >
                    Core Components
                </h3>
                <div class="h-[1px] bg-soft-charcoal flex-grow"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {#each coursework as course}
                    <div
                        class="border border-soft-charcoal p-3 bg-white hover:bg-soft-charcoal/5 transition-colors cursor-default group/item flex items-center justify-between"
                    >
                        <span
                            class="font-montserrat text-sm font-medium text-soft-charcoal group-hover/item:text-romance-red transition-colors"
                        >
                            {course}
                        </span>
                        <span
                            class="text-soft-charcoal/20 text-xs font-mono group-hover/item:text-soft-charcoal/50"
                        >
                            [MOD]
                        </span>
                    </div>
                {/each}
            </div>

            <div
                class="mt-6 p-4 bg-soft-charcoal/5 border-l-2 border-romance-red"
            >
                <p class="font-playfair italic text-soft-charcoal text-sm">
                    "Engineering is the art of organizing and directing men and
                    controlling the forces and materials of nature for the
                    benefit of the human race."
                </p>
            </div>
        </div>
    </div>

    <!-- Corner Accents -->
    <div
        class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-soft-charcoal"
    ></div>
    <div
        class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-soft-charcoal"
    ></div>
    <div
        class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-soft-charcoal"
    ></div>
    <div
        class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-soft-charcoal"
    ></div>
</section>

<style>
    .graph-paper {
        background-color: #ffffff;
        background-image: linear-gradient(
                rgba(44, 44, 44, 0.05) 1px,
                transparent 1px
            ),
            linear-gradient(90deg, rgba(44, 44, 44, 0.05) 1px, transparent 1px);
        background-size: 20px 20px;
    }
</style>
