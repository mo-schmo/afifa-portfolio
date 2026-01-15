<script lang="ts">
    import profileImg from "$lib/assets/profile.png";
    export let name = "Afifa Nusrat";
    export let title = "Biomedical Engineering Graduate & R&D Specialist";
    export let tagline = "Bridging Clinical Affairs with Engineering Design";
</script>

<section
    class="min-h-[80vh] flex flex-col items-center justify-center text-center p-8"
>
    <div class="relative mb-8">
        <!-- Profile Photo Frame -->
        <div
            class="w-80 md:w-[450px] transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl border-8 border-white bg-white p-2"
        >
            <img
                src={profileImg}
                alt="Afifa Nusrat - Pixel Art Portrait"
                class="w-full h-auto"
            />
            <!-- "Engineering Journal" handwritten tag -->
            <div
                class="absolute -bottom-4 -right-4 bg-tulip-pink px-4 py-2 shadow-md rotate-3 handwritten text-lg"
            >
                The Journal
            </div>
        </div>
    </div>

    <h1 class="text-5xl md:text-7xl font-playfair mb-2 text-soft-charcoal">
        {name}
    </h1>
    <p
        class="text-xl md:text-2xl font-montserrat font-medium text-romance-red mb-4"
    >
        {title}
    </p>
    <p
        class="text-lg md:text-xl font-montserrat italic text-soft-charcoal/70 mb-8"
    >
        "{tagline}"
    </p>

    <button
        class="bg-romance-red text-white font-montserrat font-bold py-3 px-8 rounded-sm shadow-lg hover:bg-romance-red/90 transition-all transform hover:scale-105 active:scale-95 relative overflow-hidden group"
    >
        <span class="relative z-10 uppercase tracking-widest">View Resume</span>
        <!-- Ticket notch effect -->
        <div
            class="absolute top-1/2 -left-2 w-4 h-4 bg-blush-white rounded-full -translate-y-1/2"
        ></div>
        <div
            class="absolute top-1/2 -right-2 w-4 h-4 bg-blush-white rounded-full -translate-y-1/2"
        ></div>
        <!-- Dash line separator -->
        <div
            class="absolute top-1 bottom-1 left-4 border-l border-white/30 border-dashed"
        ></div>
    </button>
</section>

<style>
    section {
        background-image: radial-gradient(
            circle at 2px 2px,
            rgba(0, 0, 0, 0.02) 1px,
            transparent 0
        );
        background-size: 24px 24px;
    }
</style>
