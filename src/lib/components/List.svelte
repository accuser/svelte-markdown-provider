<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').List;

	// TODO: CSS for spread and start
	const { children, ordered, spread, start } = node;

	const tag = ordered ? 'ol' : 'ul';
</script>

<svelte:element this={tag} class:spread {start}
	>{#each children as node}<Markdown {node} />{/each}</svelte:element
>
