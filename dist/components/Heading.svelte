<script lang="ts" module>
	export type Props = import('mdast').Heading;
</script>

<script lang="ts">
	import markdownContext from '../contexts/markdown-context.js';
	import { toString } from 'mdast-util-to-string';
	import Node from './Node.svelte';

	const { children, depth }: Props = $props();

	const tag = $derived.by(() => `h${depth}`);

	const id = $derived.by(() => {
		const { slugify } = markdownContext();

		return slugify(toString(children));
	});
</script>

<svelte:element this={tag} {id}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
