<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import { toString } from 'mdast-util-to-string';

	const { node }: { node: import('mdast-util-directive').ContainerDirective } = $props();

	const {
		attributes,
		children: [label, ...children]
	} = $derived(node);

	const title = $derived.by(() => toString(label));
</script>

<div>
	<strong>{title}</strong>
	{#each children as node}<Node {node} />{/each}
</div>

<style lang="postcss">
	div {
		@apply text-green-700 bg-green-100 border-2 border-green-500 rounded p-4 my-4;

		strong {
			@apply text-green-900;
		}
	}
</style>
