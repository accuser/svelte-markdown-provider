<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Link;

	const { children, title, url } = node;
</script>

<a href={url} {title}
	>{#each children as node}<Markdown {node} />{/each}</a
>
