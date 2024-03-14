<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import MarkdownProvider from '$lib/providers/MarkdownProvider.svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;

	const { root } = data;
</script>

<MarkdownProvider let:components let:directives>
	<article class="prose max-w-prose mx-auto prose-slate dark:prose-invert">
		{#if root}
			<Markdown node={root} {components} {directives} />
		{/if}
	</article>
</MarkdownProvider>
