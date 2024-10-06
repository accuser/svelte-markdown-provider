<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types.js';
	import Highlight from './Highlight.svelte';
	import Success from './Success.svelte';
	import YouTube from './YouTube.svelte';

	const { data }: { data: PageData } = $props();

	const { ast } = $derived(data);

	const directives = {
		success: Success,
		youtube: YouTube,
		hl: Highlight
	};
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown {ast} {directives} />
</article>
