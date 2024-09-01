<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast-util-directive').TextDirective } = $props();

	const { children, name } = $derived(node);
</script>

{@html `<!-- Unrecognized text directive :${name} -->`}
<span class={name}>
	{#each children as node}<Node {node} />{/each}
</span>
