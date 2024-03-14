<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Delete;

	const { children } = node;
</script>

<del
	>{#each children as node}<Markdown {node} />{/each}</del
>
