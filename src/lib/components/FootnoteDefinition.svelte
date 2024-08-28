<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').FootnoteDefinition } = $props();

	const { children, data, identifier, label } = $derived(node);
</script>

<div id="footnote-{identifier}">
	<p>{label}.</p>
	{#each children as node}<Markdown {node} />{/each}
	<a href="#footnote-ref-{identifier}" aria-label="Back to content">&hookleftarrow;</a>
</div>
