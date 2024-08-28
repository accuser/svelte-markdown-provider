<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').Delete } = $props();

	const { children, data } = $derived(node);
</script>

<del
	>{#each children as node}<Markdown {node} />{/each}</del
>
