<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Paragraph } = $props();

	const { children, data } = $derived(node);
</script>

<p>
	{#each children as node}<Node {node} />{/each}
</p>
