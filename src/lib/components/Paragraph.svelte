<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Paragraph;

	const { children } = node;
</script>

<p>
	{#each children as node}<Markdown {node} />{/each}
</p>
