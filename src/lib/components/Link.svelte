<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').Link } = $props();

	const { children, title, url } = $derived(node);
</script>

<a href={url} {title}
	>{#each children as node}<Markdown {node} />{/each}</a
>
