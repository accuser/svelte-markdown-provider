<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').Blockquote } = $props();

	const { children, data } = $derived(node);
</script>

<blockquote>
	{#each children as node}<Markdown {node} />{/each}
</blockquote>
