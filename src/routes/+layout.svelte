<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import MarginPoses from "$lib/components/MarginPoses.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="relative min-h-screen w-full overflow-x-hidden">
	<MarginPoses />
	{@render children()}
</div>
