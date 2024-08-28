<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').Paragraph } = $props();

	const { children, data } = $derived(node);
</script>

<p>
	{#each children as node}<Markdown {node} />{/each}
</p>
