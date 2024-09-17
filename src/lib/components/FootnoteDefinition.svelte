<script lang="ts">
	import Node from './Node.svelte';

	const { children, identifier, label }: import('mdast').FootnoteDefinition = $props();
</script>

<div id="footnote-{identifier}">
	<p>{label}.</p>
	{#each children as node}<Node {...node} />{/each}
	<a href="#footnote-ref-{identifier}" aria-label="Back to content">&hookleftarrow;</a>
</div>
