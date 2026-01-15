<script lang="ts">
    const coursework = [
        "FDA Regulation",
        "Cell & Biomaterial Engineering",
        "Differential Equations",
        "Aseptic Technique",
        "GMP/GLP",
    ];
</script>

<section
    class="max-w-4xl mx-auto p-8 my-16 bg-white shadow-2xl rounded-sm relative border-l-8 border-tulip-pink overflow-hidden"
>
    <!-- Tape effect -->
    <div
        class="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-12 bg-tulip-pink/20 backdrop-blur-sm -rotate-2 z-10"
    ></div>

    <div class="flex flex-col md:flex-row gap-8 items-start">
        <!-- Passport Style Left Side -->
        <div
            class="w-full md:w-1/3 bg-tulip-pink/10 p-6 border-2 border-dashed border-tulip-pink/30 rounded-lg"
        >
            <h2
                class="text-3xl font-playfair mb-6 text-soft-charcoal flex items-center"
            >
                <span class="mr-2">✈️</span> The Foundation
            </h2>
            <div class="space-y-4 font-montserrat text-sm">
                <div>
                    <p class="font-bold uppercase text-romance-red">
                        University
                    </p>
                    <p class="text-lg">NJIT, Newark, NJ</p>
                </div>
                <div>
                    <p class="font-bold uppercase text-romance-red">Degree</p>
                    <p class="text-lg">B.S. in General Engineering</p>
                    <p class="text-soft-charcoal/60">
                        Biomedical Concentration
                    </p>
                </div>
                <div>
                    <p class="font-bold uppercase text-romance-red">Dates</p>
                    <p class="text-lg">Jan 2021 – Aug 2025</p>
                </div>
            </div>
        </div>

        <!-- Stamps Right Side -->
        <div class="w-full md:w-2/3">
            <h3
                class="text-xl font-playfair italic mb-4 text-soft-charcoal/60 underline decoration-antique-gold font-bold"
            >
                Key Coursework & Certifications
            </h3>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {#each coursework as course}
                    <div
                        class="stamp-effect p-4 text-center transform rotate-{Math.floor(
                            Math.random() * 6,
                        ) -
                            3} hover:rotate-0 transition-transform cursor-default"
                    >
                        <span
                            class="handwritten text-lg font-bold text-romance-red line-clamp-2"
                            >{course}</span
                        >
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Travel Sticker Motif -->
    <div class="absolute bottom-4 right-4 opacity-20 pointer-events-none">
        <div
            class="w-20 h-20 border-4 border-antique-gold rounded-full flex items-center justify-center rotate-12"
        >
            <span class="text-antique-gold font-bold text-[10px] text-center"
                >VALIDATED<br />2025</span
            >
        </div>
    </div>
</section>

<style>
    .stamp-effect {
        border: 3px double #c41e3a;
        border-radius: 5px;
        background-color: #fffafb;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 80px;
    }

    .stamp-effect::before {
        content: "";
        position: absolute;
        inset: 2px;
        border: 1px solid #c41e3a;
        opacity: 0.3;
    }
</style>
