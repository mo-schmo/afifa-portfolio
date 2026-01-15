<script lang="ts">
    const toolSkills = [
        "AutoCAD",
        "SolidWorks",
        "Python",
        "MATLAB",
        "Power BI",
    ];
    const labSkills = [
        "GMP/GLP",
        "Aseptic Technique",
        "Tensile Testing",
        "DNA Quantitation",
        "Cell Culture",
    ];
</script>

<section
    class="max-w-4xl mx-auto p-8 my-16 bg-blush-white border-2 border-soft-charcoal/10 rounded-xl relative overflow-hidden"
>
    <div
        class="absolute inset-0 opacity-5"
        style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 20px 20px;"
    ></div>

    <div class="relative z-10 text-center mb-12">
        <h2 class="text-4xl font-playfair text-soft-charcoal mb-2">
            The Toolkit
        </h2>
        <p class="handwritten text-romance-red text-xl">My Sticker Sheet</p>
    </div>

    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Technical Tools -->
        <div>
            <h3
                class="text-xl font-bold font-montserrat uppercase tracking-widest text-antique-gold mb-6 border-b-2 border-antique-gold/20 pb-2"
            >
                Technical Tools
            </h3>
            <div class="flex flex-wrap gap-4">
                {#each toolSkills as skill}
                    <div class="skill-sticker bg-tulip-pink text-soft-charcoal">
                        {skill}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Lab Techniques -->
        <div>
            <h3
                class="text-xl font-bold font-montserrat uppercase tracking-widest text-romance-red mb-6 border-b-2 border-romance-red/20 pb-2"
            >
                Lab Techniques
            </h3>
            <div class="flex flex-wrap gap-4">
                {#each labSkills as skill}
                    <div
                        class="skill-sticker bg-white border-2 border-romance-red text-romance-red"
                    >
                        {skill}
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Decorative element -->
    <div
        class="absolute -bottom-10 -left-10 w-40 h-40 bg-antique-gold/10 rounded-full blur-3xl"
    ></div>
</section>

<style>
    @reference "../../routes/layout.css";
    .skill-sticker {
        @apply px-4 py-2 rounded-full font-montserrat font-bold shadow-md transform transition-all hover:scale-110 hover:-rotate-3 cursor-default;
        box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
    }
</style>
