<script lang="ts">
	import { toString } from 'mdast-util-to-string';
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').Heading } = $props();

	const { children, data, depth } = $derived(node);

	let tag = $derived.by(() => `h${depth}`);

	const id = $derived.by(() =>
		toString(children)
			.toLowerCase()
			.replace(/[^\w]+/g, '-')
			.replace(/-+/, '-')
			.replace(/^-|-$/g, '')
	);
</script>

<svelte:element this={tag} {id}
	>{#each children as node}<Markdown {node} />{/each}</svelte:element
>
