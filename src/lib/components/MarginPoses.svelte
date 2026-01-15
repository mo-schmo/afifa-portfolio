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
</script>

<div
    class="pointer-events-none absolute inset-0 z-0 hidden w-full justify-between overflow-hidden px-2 lg:flex 2xl:px-8"
>
    <!-- Left Column -->
    <div class="flex h-full flex-col justify-around gap-20 py-10 opacity-80">
        {#each leftPoses as pose, i}
            <img
                src={pose}
                alt="Decorative Pose"
                class="w-24 object-contain transition-transform hover:scale-105 xl:w-32"
                style="transform: translateX({i % 2 === 0
                    ? '-10px'
                    : '20px'}) rotate({i % 2 === 0 ? '-5deg' : '5deg'});"
            />
        {/each}
    </div>

    <!-- Right Column -->
    <div class="flex h-full flex-col justify-around gap-24 py-20 opacity-80">
        {#each rightPoses as pose, i}
            <img
                src={pose}
                alt="Decorative Pose"
                class="w-24 object-contain transition-transform hover:scale-105 xl:w-32"
                style="transform: translateX({i % 2 === 0
                    ? '10px'
                    : '-20px'}) rotate({i % 2 === 0 ? '5deg' : '-5deg'});"
            />
        {/each}
    </div>
</div>
