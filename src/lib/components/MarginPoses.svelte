<script>
    // Poses for left and right columns
    const poses = [
        "/images/pose_01.png",
        "/images/pose_02.png",
        "/images/pose_03.png",
        "/images/pose_04.png",
        "/images/pose_05.png",
        "/images/pose_06.png",
        "/images/pose_07.png",
        "/images/pose_08.png",
        "/images/pose_09.png",
        "/images/pose_10.png",
        "/images/pose_11.png",
        "/images/pose_12.png",
        "/images/pose_13.png",
        "/images/pose_14.png",
        "/images/pose_15.png",
    ];

    // Distribute poses: even indices left, odd indices right
    const leftPoses = poses.filter((_, i) => i % 2 === 0);
    const rightPoses = poses.filter((_, i) => i % 2 !== 0);

    // Pseudo-random generation for stable rendering
    function getRandomStyles(index, side) {
        const seed = index * 9301 + 49297;
        const rnd = (seed % 233280) / 233280;

        // Rotation between -15 and 15 degrees
        const rotation = Math.floor(rnd * 30) - 15;

        // Horizontal offset between -30px and 30px
        const xOffset = Math.floor(rnd * 60) - 30;

        return `transform: translateX(${xOffset}px) rotate(${rotation}deg);`;
    }
</script>

<div
    class="pointer-events-none absolute inset-0 z-0 hidden w-full justify-between overflow-hidden px-10 lg:flex 2xl:px-32"
>
    <!-- Left Column -->
    <div class="flex h-full flex-col justify-around gap-20 py-10 opacity-80">
        {#each leftPoses as pose, i}
            <img
                src={pose}
                alt="Decorative Pose"
                class="w-24 object-contain transition-transform hover:scale-105 xl:w-36"
                style={getRandomStyles(i, "left")}
            />
        {/each}
    </div>

    <!-- Right Column -->
    <div class="flex h-full flex-col justify-around gap-24 py-20 opacity-80">
        {#each rightPoses as pose, i}
            <img
                src={pose}
                alt="Decorative Pose"
                class="w-24 object-contain transition-transform hover:scale-105 xl:w-36"
                style={getRandomStyles(i + 100, "right")}
            />
        {/each}
    </div>
</div>
