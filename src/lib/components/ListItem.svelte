<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').ListItem } = $props();

	const { checked, children, data, spread } = $derived(node);
</script>

<li>
	{#each children as node}<Markdown {node} />{/each}
</li>
