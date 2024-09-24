<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types.js';
	import Highlight from './Highlight.svelte';
	import Success from './Success.svelte';
	import YouTube from './YouTube.svelte';

	const { data }: { data: PageData } = $props();

	const { src } = $derived(data);

	const directives = {
		containerDirective: { success: Success },
		leafDirective: { youtube: YouTube },
		textDirective: { hl: Highlight }
	};
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown {src} {directives} />
</article>
