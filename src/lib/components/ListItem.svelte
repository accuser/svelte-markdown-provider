<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').ListItem } = $props();

	const { children } = $derived.by(() => ({
		...node,
		children:
			// If the list item contains a single paragraph, unwrap it
			node.children && node.children.length === 1 && node.children[0].type === 'paragraph'
				? node.children[0].children
				: node.children
	}));
</script>

<li>
	{#each children as node}<Node {node} />{/each}
</li>
