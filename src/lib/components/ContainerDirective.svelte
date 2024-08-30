<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast-util-directive').ContainerDirective } = $props();

	const { children, data, name } = $derived(node);
</script>

{@html `<!-- Unrecognized container directive :::${name} -->`}
<div class={name}>
	{#each children as node}<Node {node} />{/each}
</div>
