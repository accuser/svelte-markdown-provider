<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Strong } = $props();

	const { children } = $derived(node);
</script>

<strong
	>{#each children as node}<Node {node} />{/each}</strong
>
