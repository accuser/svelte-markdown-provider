<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').ListItem } = $props();

	const { checked, children, data, spread } = $derived(node);
</script>

<li>
	{#each children as node}<Node {node} />{/each}
</li>
