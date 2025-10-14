<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import { toString } from 'mdast-util-to-string';

	const { node }: { node: import('mdast-util-directive').ContainerDirective } = $props();

	let { children } = $derived(node);

	const { title, siblings } = $derived.by(() => {
		return { title: toString(children[0]), siblings: children.slice(1) };
	});
</script>

<div class="text-green-700 bg-green-100 border-2 border-green-500 rounded p-4 my-4">
	<strong class="text-green-900">{title}</strong>
	{#each siblings as sibling}<Node node={sibling} />{/each}
</div>
