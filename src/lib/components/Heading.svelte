<script lang="ts" module>
	export type Props = import('mdast').Heading;
</script>

<script lang="ts">
	import { slug } from 'github-slugger';
	import { toString } from 'mdast-util-to-string';
	import Node from './Node.svelte';

	let { children, depth }: Props = $props();

	let tag = $derived.by(() => `h${depth}`);
	let id = $derived.by(() => slug(toString(children)));
</script>

<svelte:element this={tag} {id}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
