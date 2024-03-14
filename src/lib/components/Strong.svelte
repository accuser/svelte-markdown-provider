<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Strong;

	const { children } = node;
</script>

<strong
	>{#each children as node}<Markdown {node} />{/each}</strong
>
