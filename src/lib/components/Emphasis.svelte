<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Emphasis } = $props();

	const { children } = $derived(node);
</script>

<em
	>{#each children as node}<Node {node} />{/each}</em
>
