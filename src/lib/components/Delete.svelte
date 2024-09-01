<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Delete } = $props();

	const { children } = $derived(node);
</script>

<del
	>{#each children as node}<Node {node} />{/each}</del
>
