<script lang="ts">
	import defaultSlugify from '$lib/defaults/slugify.js';
	import MARKDOWN_SLUGIFY_TOKEN from '$lib/tokens/markdown-slugify.token.js';
	import { toString } from 'mdast-util-to-string';
	import { getContext, hasContext } from 'svelte';
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Heading } = $props();

	const { children, depth } = $derived(node);

	let tag = $derived.by(() => `h${depth}`);

	const slugify = hasContext(MARKDOWN_SLUGIFY_TOKEN)
		? getContext<(str: string) => string>(MARKDOWN_SLUGIFY_TOKEN)
		: defaultSlugify;

	const id = $derived.by(() => slugify(toString(children)));
</script>

<svelte:element this={tag} {id}
	>{#each children as node}<Node {node} />{/each}</svelte:element
>
