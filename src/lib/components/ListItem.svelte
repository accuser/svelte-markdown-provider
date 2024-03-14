<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').ListItem;

	// TODO: CSS for checked and spread
	const { checked, children, spread } = node;
</script>

<li>
	{#each children as node}<Markdown {node} />{/each}
</li>
