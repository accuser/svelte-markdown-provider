<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').FootnoteDefinition;

	const { children, identifier, label } = node;
</script>

<div id="footnote-{identifier}">
	<p>{label}.</p>
	{#each children as node}<Markdown {node} />{/each}
	<a href="#footnote-ref-{identifier}" aria-label="Back to content">&hookleftarrow;</a>
</div>
