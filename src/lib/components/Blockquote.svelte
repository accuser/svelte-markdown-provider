<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Blockquote } = $props();

	const { children } = $derived(node);
</script>

<blockquote>
	{#each children as node}<Node {node} />{/each}
</blockquote>
