<script lang="ts">
	import Image from './Image.svelte';
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Paragraph } = $props();
</script>

{#if node.children && node.children.length > 1 && node.children[0].type === 'image'}
	<Image node={node.children[0]} />
{:else}
	{@const { children } = node}
	<p>
		{#each children as node}<Node {node} />{/each}
	</p>
{/if}
