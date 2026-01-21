<script lang="ts">
    import { onMount } from "svelte";

    let isPlaying = $state(false);
    let volume = $state(0.5); // Default volume 50%
    let audio: HTMLAudioElement;

    function togglePlay() {
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    }

    function stop() {
        if (!audio) return;
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    }

    function seek(seconds: number) {
        if (!audio) return;
        audio.currentTime += seconds;
    }

    function updateVolume(e: Event) {
        const target = e.target as HTMLInputElement;
        volume = parseFloat(target.value);
        if (audio) {
            audio.volume = volume;
        }
    }

    onMount(() => {
        audio = new Audio("/music/track_1.mp3");
        audio.loop = true;
        audio.volume = volume;

        // Handle external pauses (e.g. system controls)
        audio.addEventListener("pause", () => (isPlaying = false));
        audio.addEventListener("play", () => (isPlaying = true));

        return () => {
            if (audio) {
                audio.pause();
                audio = null!;
            }
        };
    });
</script>

<!-- The Player Widget -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="z-50 transition-transform hover:scale-105 inline-block">
    <!-- Player Chassis -->
    <div
        class="relative bg-gray-200 rounded-3xl p-4 shadow-xl border-b-8 border-gray-300 w-80 max-w-full mx-auto"
    >
        <!-- Cassette Window (Recessed) -->
        <div
            class="relative h-44 w-full bg-gray-800 rounded-xl shadow-inner border-2 border-gray-600 mb-4 overflow-hidden flex items-center justify-center"
        >
            <!-- The Original Tape Visual (Scaled down slightly to fit) -->
            <div
                class="cassette-body relative h-36 w-60 rounded-lg bg-gray-900 shadow-md"
            >
                <!-- Top Label Area -->
                <div
                    class="absolute left-1 right-1 top-1 h-20 rounded bg-orange-100 p-1 shadow-inner"
                >
                    <div
                        class="absolute top-1 left-2 font-handwriting text-[10px] text-gray-500 font-bold opacity-70"
                    ></div>
                    <!-- Window -->
                    <div
                        class="mx-auto mt-3 flex h-10 w-36 items-center justify-between rounded-full bg-gray-700 p-1 shadow-inner border border-gray-600"
                    >
                        <!-- Left Reel -->
                        <div
                            class="h-8 w-8 overflow-hidden rounded-full bg-white relative"
                        >
                            <div
                                class="absolute inset-0 border-2 border-gray-300 rounded-full border-dashed"
                                class:animate-spin-slow={isPlaying}
                            ></div>
                            <div
                                class="absolute inset-1.5 bg-black rounded-full"
                            ></div>
                        </div>

                        <!-- Tape Bridge -->
                        <div
                            class="flex-1 h-6 bg-transparent relative overflow-hidden mx-1"
                        >
                            <div
                                class="absolute top-1/2 w-full h-3 bg-black/80 -translate-y-1/2"
                            ></div>
                        </div>

                        <!-- Right Reel -->
                        <div
                            class="h-8 w-8 overflow-hidden rounded-full bg-white relative"
                        >
                            <div
                                class="absolute inset-0 border-2 border-gray-300 rounded-full border-dashed"
                                class:animate-spin-slow={isPlaying}
                            ></div>
                            <div
                                class="absolute inset-1.5 bg-black rounded-full"
                            ></div>
                        </div>
                    </div>

                    <!-- Handwritten Title -->
                    <div
                        class="mt-1 text-center font-serif font-bold text-gray-800 opacity-90 tracking-wide text-xs transform -rotate-1"
                    >
                        {isPlaying ? "Now Playing..." : "Play me!"}
                    </div>
                </div>

                <!-- Bottom Details -->
                <div
                    class="absolute bottom-2 left-4 right-4 h-6 flex items-end justify-between px-2"
                >
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                </div>
                <div
                    class="absolute bottom-3 left-1/2 h-4 w-24 -translate-x-1/2 rounded-sm bg-gray-800 shadow-inner"
                ></div>
            </div>

            <!-- Glass Reflection Overlay -->
            <div
                class="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-xl"
            ></div>
        </div>

        <!-- Controls Area -->
        <div
            class="bg-gray-300 rounded-xl p-3 shadow-inner border border-white/50"
        >
            <!-- Buttons Row -->
            <div class="flex justify-between items-center mb-3 px-2">
                <!-- Back -->
                <button
                    onclick={() => seek(-10)}
                    class="h-10 w-10 rounded-full bg-gray-200 shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)] flex items-center justify-center active:shadow-inner active:bg-gray-300 transition-all border border-white/60 group"
                    title="Rewind 10s"
                >
                    <div
                        class="w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-gray-600 border-b-[6px] border-b-transparent"
                    ></div>
                    <div
                        class="w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-gray-600 border-b-[6px] border-b-transparent -ml-1"
                    ></div>
                </button>

                <!-- Stop -->
                <button
                    onclick={stop}
                    class="h-10 w-10 rounded-full bg-gray-200 shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)] flex items-center justify-center active:shadow-inner active:bg-gray-300 transition-all border border-white/60"
                    title="Stop"
                >
                    <div class="w-3 h-3 bg-gray-600 rounded-sm"></div>
                </button>

                <!-- Play/Pause (Main) -->
                <button
                    onclick={togglePlay}
                    class="h-10 w-10 rounded-full bg-gray-200 shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)] flex items-center justify-center active:shadow-inner active:bg-gray-300 transition-all border border-white/60 w-12 !bg-gray-100 active:!bg-gray-200"
                    title={isPlaying ? "Pause" : "Play"}
                >
                    {#if isPlaying}
                        <div class="flex gap-1">
                            <div
                                class="w-1.5 h-4 bg-romance-red rounded-sm"
                            ></div>
                            <div
                                class="w-1.5 h-4 bg-romance-red rounded-sm"
                            ></div>
                        </div>
                    {:else}
                        <div
                            class="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-romance-red border-b-[8px] border-b-transparent ml-1"
                        ></div>
                    {/if}
                </button>

                <!-- Forward -->
                <button
                    onclick={() => seek(10)}
                    class="h-10 w-10 rounded-full bg-gray-200 shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)] flex items-center justify-center active:shadow-inner active:bg-gray-300 transition-all border border-white/60 group"
                    title="Forward 10s"
                >
                    <div
                        class="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-600 border-b-[6px] border-b-transparent"
                    ></div>
                    <div
                        class="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-600 border-b-[6px] border-b-transparent -ml-1"
                    ></div>
                </button>
            </div>

            <!-- Volume Slider -->
            <div class="flex items-center gap-3 px-2">
                <span
                    class="text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                    >Vol</span
                >
                <div class="flex-1 relative h-6 flex items-center">
                    <!-- Track Line -->
                    <div
                        class="absolute w-full h-1 bg-gray-400 rounded-full shadow-inner"
                    ></div>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        oninput={updateVolume}
                        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 touch-none"
                    />
                    <!-- Custom Thumb (Visual Only - positioned by JS in a real app, but here used native thumb mostly) -->
                    <!-- We'll stick to a styled native input for simplicity and robustness -->
                    <div
                        class="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-romance-red rounded-full shadow-md pointer-events-none transition-all"
                        style="left: {volume * 100}%"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .animate-spin-slow {
        animation: spin 3s linear infinite;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .font-handwriting {
        font-family: "Courier New", Courier, monospace;
    }
</style>
