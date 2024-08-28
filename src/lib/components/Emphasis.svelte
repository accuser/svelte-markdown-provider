<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').Emphasis } = $props();

	const { children, data } = $derived(node);
</script>

<em
	>{#each children as node}<Markdown {node} />{/each}</em
>
