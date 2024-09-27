<script lang="ts">
	import { slug } from 'github-slugger';
	import type { Heading } from 'mdast';
	import { toString } from 'mdast-util-to-string';
	import Node from './Node.svelte';

	let { children, depth }: Heading = $props();

	let id = $derived.by(() => slug(toString(children)));
	let tag = $derived.by(() => `h${depth}`);
</script>

<svelte:element this={tag} {id}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
