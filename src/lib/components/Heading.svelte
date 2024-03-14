<script lang="ts">
	import { toString } from 'mdast-util-to-string';
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Heading;

	const { children, depth } = node;

	let tag = `h${depth}`;

	const id = toString(node)
		.toLowerCase()
		.replace(/[^\w]+/g, '-')
		.replace(/-+/, '-')
		.replace(/^-|-$/g, '');
</script>

<svelte:element this={tag} {id}
	>{#each children as node}<Markdown {node} />{/each}</svelte:element
>
