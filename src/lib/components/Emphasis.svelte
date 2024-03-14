<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Emphasis;

	const { children } = node;
</script>

<em
	>{#each children as node}<Markdown {node} />{/each}</em
>
