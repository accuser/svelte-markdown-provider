<script lang="ts">
	import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context-token.js';
	import type { MarkdownContext } from '$lib/types/markdown-context.js';
	import { toString } from 'mdast-util-to-string';
	import { getContext } from 'svelte';
	import Node from './Node.svelte';

	const { children, depth }: import('mdast').Heading = $props();

	let tag = $derived.by(() => `h${depth}`);

	const id = $derived.by(() => {
		const { slugify } = getContext<MarkdownContext>(MARKDOWN_CONTEXT_TOKEN);

		return slugify(toString(children));
	});
</script>

<svelte:element this={tag} {id}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
