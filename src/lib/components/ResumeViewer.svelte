<script lang="ts">
    import { fade, scale } from "svelte/transition";
    import { portal } from "$lib/actions/portal";

    export let isOpen = false;
    export let onClose: () => void;

    // Default resume path - user needs to place file here
    const resumePath = "/resume.pdf";
</script>

{#if isOpen}
    <div
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-soft-charcoal/80 backdrop-blur-sm"
        use:portal
        transition:fade={{ duration: 200 }}
    >
        <!-- Backdrop click to close -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="absolute inset-0" onclick={onClose}></div>

        <!-- Modal Content -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div
            class="relative w-full max-w-5xl h-[85vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border-2 border-white"
            transition:scale={{ duration: 200, start: 0.95 }}
            role="dialog"
            aria-modal="true"
        >
            <!-- Header (Journal Spine Style) -->
            <div
                class="bg-soft-charcoal text-white p-4 flex justify-between items-center shadow-md z-10"
            >
                <h2
                    class="font-playfair font-bold text-xl tracking-wide flex items-center gap-2"
                >
                    <span>📄</span> Document Viewer
                </h2>
                <div class="flex items-center gap-4">
                    <a
                        href={resumePath}
                        download="Afifa_Nusrat_Resume.pdf"
                        class="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors font-montserrat text-sm font-bold"
                    >
                        <span>⬇️</span> Download
                    </a>
                    <button
                        onclick={onClose}
                        class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-xl font-bold leading-none"
                    >
                        &times;
                    </button>
                </div>
            </div>

            <!-- PDF Container -->
            <div class="flex-grow bg-blush-white relative">
                <!-- Loading State / Fallback -->
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center text-soft-charcoal/50 z-0"
                >
                    <p class="mb-4 font-montserrat">Loading Document...</p>
                    <div
                        class="w-8 h-8 border-4 border-tulip-pink border-t-transparent rounded-full animate-spin"
                    ></div>
                    <p class="mt-8 text-sm max-w-md text-center px-4">
                        If the resume doesn't load, <a
                            href={resumePath}
                            target="_blank"
                            class="text-romance-red underline font-bold"
                            >click here</a
                        > to view it directly.
                    </p>
                </div>

                <!-- Iframe for PDF -->
                <iframe
                    src={resumePath}
                    title="Resume PDF"
                    class="relative z-10 w-full h-full"
                ></iframe>
            </div>

            <!-- Mobile Download Footer -->
            <div
                class="sm:hidden bg-white p-4 border-t border-gray-100 flex justify-center"
            >
                <a
                    href={resumePath}
                    download="Afifa_Nusrat_Resume.pdf"
                    class="flex items-center gap-2 px-6 py-3 bg-romance-red text-white hover:bg-romance-red/90 rounded-full transition-colors font-montserrat font-bold shadow-lg"
                >
                    Download Resume
                </a>
            </div>
        </div>
    </div>
{/if}
