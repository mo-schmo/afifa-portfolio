<script lang="ts">
    const projects = [
        {
            title: "FDA Mock Submission",
            icon: "📄",
            stamp: "APPROVED",
            details: "Document icon with an 'Approved' stamp motif.",
        },
        {
            title: "Dental Implant Design",
            icon: "🦷",
            details: "Sketch-style icon showing cost-effective design matrix.",
        },
        {
            title: "Arduino Pill Dispenser",
            icon: "⚙️",
            sticker: "TECH",
            details: "Image of a circuit board/Arduino with a 'Tech' sticker.",
        },
        {
            title: "Lab Skills",
            type: "polaroid",
            skills: ["DNA Quantitation", "Cell Culture"],
            details: "A 'Polaroid' grouping showing lab work.",
        },
    ];
</script>

<section class="max-w-5xl mx-auto p-8 my-16">
    <div class="flex items-center justify-between mb-12">
        <h2 class="text-4xl font-playfair text-soft-charcoal">The Workshop</h2>
        <span class="handwritten text-romance-red text-xl transform -rotate-12"
            >Handmade with care</span
        >
    </div>

    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
    >
        {#each projects as project}
            {#if project.type === "polaroid"}
                <div
                    class="bg-white p-3 shadow-xl transform rotate-2 hover:rotate-0 transition-transform flex flex-col items-center"
                >
                    <div
                        class="w-full aspect-square bg-blue-50 flex flex-col items-center justify-center p-4 text-center"
                    >
                        <span class="text-4xl mb-2">🧫</span>
                        <p class="handwritten text-sm text-soft-charcoal/60">
                            {project.skills.join(" & ")}
                        </p>
                    </div>
                    <div class="mt-4 w-full px-2 pb-2">
                        <h3
                            class="handwritten text-xl text-soft-charcoal font-bold"
                        >
                            {project.title}
                        </h3>
                    </div>
                </div>
            {:else}
                <div
                    class="sticker-card p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
                >
                    <div class="text-4xl mb-4">{project.icon}</div>
                    <h3 class="font-playfair text-xl font-bold mb-2">
                        {project.title}
                    </h3>
                    <p
                        class="font-montserrat text-sm text-soft-charcoal/60 leading-tight"
                    >
                        {project.details}
                    </p>

                    {#if project.stamp}
                        <div
                            class="absolute top-2 right-2 border-2 border-romance-red/40 text-romance-red/40 px-1 rounded rotate-12 text-[10px] font-bold"
                        >
                            {project.stamp}
                        </div>
                    {/if}

                    {#if project.sticker}
                        <div
                            class="absolute bottom-2 right-2 bg-antique-gold text-white text-[10px] px-2 py-0.5 rounded-full font-bold"
                        >
                            {project.sticker}
                        </div>
                    {/if}
                </div>
            {/if}
        {/each}
    </div>
</section>
