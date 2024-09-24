<script lang="ts" module>
	export type Props = import('mdast').FootnoteDefinition;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children, identifier, label }: Props = $props();
</script>

<div id="footnote-{identifier}">
	<p>{label}.</p>
	{#each children as node}<Node {...node} />{/each}
	<a href="#footnote-ref-{identifier}" aria-label="Back to content">&hookleftarrow;</a>
</div>
