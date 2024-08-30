<script lang="ts">
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Link } = $props();

	const { children, title, url } = $derived(node);
</script>

<a href={url} {title}
	>{#each children as node}<Node {node} />{/each}</a
>
