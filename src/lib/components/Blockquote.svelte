<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Blockquote;

	const { children } = node;
</script>

<blockquote>
	{#each children as node}<Markdown {node} />{/each}
</blockquote>
