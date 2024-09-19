<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types.js';

	const { data }: { data: PageData } = $props();

	const { src } = $derived(data);

	let frontmatter = $state();
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	{#if frontmatter}
		<strong>Front Matter</strong>
		<pre><code>{JSON.stringify(frontmatter, undefined, 2)}</code></pre>
		<hr />
	{/if}
	<Markdown {src} bind:frontmatter />
</article>
