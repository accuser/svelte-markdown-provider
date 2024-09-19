<script lang="ts">
	import { onMount } from 'svelte';

	const { children } = $props();

	onMount(() => {
		if (typeof renderMathInElement === 'function') renderMathInElement(document.body);
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
		integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+"
		crossorigin="anonymous"
	/>
</svelte:head>

{@render children()}
