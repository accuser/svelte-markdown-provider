<script lang="ts">
	import Image from './Image.svelte';
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Paragraph } = $props();

	const { children } = $derived(node);
</script>

{#if children && children.length === 1 && children[0].type === 'image'}
	<Image node={children[0]} />
{:else}
	<p>
		{#each children as node}<Node {node} />{/each}
	</p>
{/if}
