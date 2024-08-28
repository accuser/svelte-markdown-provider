<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').Strong } = $props();

	const { children } = $derived(node);
</script>

<strong
	>{#each children as node}<Markdown {node} />{/each}</strong
>
