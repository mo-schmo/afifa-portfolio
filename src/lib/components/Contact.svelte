<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<section class="max-w-4xl mx-auto py-16 px-4">
    <div
        class="bg-[#FDFBF7] shadow-xl rotate-1 transform hover:rotate-0 transition-transform duration-500 relative overflow-hidden rounded-sm border border-gray-200"
    >
        <!-- Air Mail Stripes (Top Edge) -->
        <div
            class="h-4 w-full bg-[repeating-linear-gradient(45deg,#C41E3A,#C41E3A_10px,#FDFBF7_10px,#FDFBF7_20px,#003366_20px,#003366_30px,#FDFBF7_30px,#FDFBF7_40px)]"
        ></div>

        <div class="p-8 md:p-12 flex flex-col md:flex-row gap-12 relative z-10">
            <!-- Left Side: Message (Contact Form/Actions) -->
            <div class="flex-1 space-y-8">
                <div>
                    <h2
                        class="font-playfair font-bold text-3xl text-soft-charcoal mb-2"
                    >
                        Send a Transmission
                    </h2>
                    <p
                        class="font-montserrat text-soft-charcoal/60 text-sm italic"
                    >
                        "Communication is the solvent of all problems and is the
                        foundation for personal development."
                    </p>
                </div>

                <div class="flex flex-col gap-4">
                    <a
                        href="mailto:anusrat0806@gmail.com"
                        class="group flex items-center justify-between p-4 border-2 border-soft-charcoal/10 hover:border-romance-red bg-white hover:bg-romance-red/5 transition-all rounded-sm"
                    >
                        <div class="flex items-center gap-4">
                            <span
                                class="text-2xl group-hover:scale-110 transition-transform"
                                >✉️</span
                            >
                            <span
                                class="font-montserrat font-bold text-soft-charcoal group-hover:text-romance-red"
                            >
                                Email Me
                            </span>
                        </div>
                        <span
                            class="font-mono text-xs text-soft-charcoal/30 group-hover:text-romance-red/50"
                        >
                            PRIORITY MAIL
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/afifa-nusrat-594a7a301/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group flex items-center justify-between p-4 border-2 border-soft-charcoal/10 hover:border-[#0077B5] bg-white hover:bg-[#0077B5]/5 transition-all rounded-sm"
                    >
                        <div class="flex items-center gap-4">
                            <span
                                class="text-2xl group-hover:scale-110 transition-transform"
                                >💼</span
                            >
                            <span
                                class="font-montserrat font-bold text-soft-charcoal group-hover:text-[#0077B5]"
                            >
                                LinkedIn
                            </span>
                        </div>
                        <span
                            class="font-mono text-xs text-soft-charcoal/30 group-hover:text-[#0077B5]/50"
                        >
                            CONNECT
                        </span>
                    </a>
                </div>
            </div>

            <!-- Vertical Divider (Hidden on Mobile) -->
            <div class="hidden md:block w-px bg-soft-charcoal/20 mx-4 relative">
                <!-- Half-circle cutout effect -->
                <div
                    class="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FDFBF7] rounded-full border border-soft-charcoal/20"
                ></div>
                <div
                    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FDFBF7] rounded-full border border-soft-charcoal/20"
                ></div>
            </div>

            <!-- Right Side: Address & Stamp -->
            <div
                class="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative"
            >
                <!-- Stamp Area -->
                <div class="self-end mb-8 relative group cursor-default">
                    <div
                        class="w-24 h-28 border-4 border-dashed border-soft-charcoal/20 p-2 flex items-center justify-center bg-white transform rotate-3 group-hover:rotate-0 transition-transform"
                    >
                        <div
                            class="w-full h-full bg-tulip-pink/20 flex flex-col items-center justify-center"
                        >
                            <span
                                class="font-playfair font-bold text-soft-charcoal/40 text-xs"
                                >POSTAGE</span
                            >
                            <span class="text-3xl mt-1">🔬</span>
                            <span
                                class="font-mono text-[10px] text-soft-charcoal/40 mt-1"
                                >2026</span
                            >
                        </div>
                    </div>
                    <!-- Wavy Cancellation Mark -->
                    <div
                        class="absolute top-1/2 left-0 w-32 h-8 -translate-x-8 -translate-y-1/2 overflow-hidden opacity-40 pointer-events-none"
                    >
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 20"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 10 Q 5 0, 10 10 T 20 10 T 30 10 T 40 10 T 50 10"
                                stroke="black"
                                stroke-width="2"
                                fill="none"
                            />
                            <path
                                d="M0 15 Q 5 5, 10 15 T 20 15 T 30 15 T 40 15 T 50 15"
                                stroke="black"
                                stroke-width="2"
                                fill="none"
                            />
                        </svg>
                    </div>
                </div>

                <div
                    class="mt-auto space-y-2 font-handwritten text-xl text-soft-charcoal w-full"
                >
                    <p class="border-b border-soft-charcoal/10 pb-2">
                        To: World Class Engineer
                    </p>
                    <p class="border-b border-soft-charcoal/10 pb-2">
                        Afifa Nusrat
                    </p>
                    <p class="border-b border-soft-charcoal/10 pb-2">
                        Newark, NJ 07102
                    </p>
                    <p class="border-b border-soft-charcoal/10 pb-2">
                        United States
                    </p>
                </div>
            </div>
        </div>

        <!-- Air Mail Stripes (Bottom Edge) -->
        <div
            class="h-4 w-full bg-[repeating-linear-gradient(45deg,#C41E3A,#C41E3A_10px,#FDFBF7_10px,#FDFBF7_20px,#003366_20px,#003366_30px,#FDFBF7_30px,#FDFBF7_40px)]"
        ></div>
    </div>
</section>

<style>
    .font-handwritten {
        font-family: var(--font-caveat, cursive);
    }
</style>
