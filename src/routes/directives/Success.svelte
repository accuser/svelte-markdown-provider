<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import { toString } from 'mdast-util-to-string';

	const { children }: import('mdast-util-directive').ContainerDirective = $props();

	const { title, siblings } = $derived.by(() => {
		return { title: toString(children[0]), siblings: children.slice(1) };
	});
</script>

<div>
	<strong>{title}</strong>
	{#each siblings as node}<Node {...node} />{/each}
</div>

<style lang="postcss">
	div {
		@apply text-green-700 bg-green-100 border-2 border-green-500 rounded p-4 my-4;

		strong {
			@apply text-green-900;
		}
	}
</style>
