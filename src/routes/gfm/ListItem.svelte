<script lang="ts">
	import Node from '$lib/components/Node.svelte';

	const node: import('mdast').ListItem = $props();

	const { checked, children, spread } = $derived.by(() => ({
		...node,
		children:
			// If the list item contains a single paragraph, unwrap it
			node.children && node.children.length === 1 && node.children[0].type === 'paragraph'
				? node.children[0].children
				: node.children
	}));
</script>

<li>
	{#if typeof checked === 'boolean'}<input type="checkbox" {checked} disabled />{/if}
	{#each children as node}<Node {...node} />{/each}
</li>

<style lang="postcss">
	li:has(input[type='checkbox']) {
		@apply list-none;

		& input[type='checkbox'] {
			@apply align-middle;
			margin: 0 0.5rem 0 -1.5rem;
		}
	}
</style>
