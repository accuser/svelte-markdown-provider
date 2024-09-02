<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import { parse } from 'yaml';
	import type { PageData } from './$types.js';

	const { data }: { data: PageData } = $props();

	const { src } = $derived(data);

	let ast: import('mdast').Root | undefined = $state();

	const frontmatter = $derived.by(() => {
		if (ast) {
			const value = ast.children.find((node) => node.type === 'yaml')?.value;

			return value ? parse(value) : undefined;
		}
	});
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	{#if frontmatter}
		<strong>Front Matter</strong>
		<pre><code>{JSON.stringify(frontmatter, undefined, 2)}</code></pre>
		<hr />
	{/if}
	<Markdown bind:ast {src} />
</article>
