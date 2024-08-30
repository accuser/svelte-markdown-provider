<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').List } = $props();

	const { children, data, ordered, spread, start } = $derived(node);

	const tag = $derived.by(() => (ordered ? 'ol' : 'ul'));
</script>

<svelte:element this={tag} class:spread {start}
	>{#each children as node}<Node {node} />{/each}</svelte:element
>
