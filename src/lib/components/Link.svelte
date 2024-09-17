<script lang="ts">
	import Node from './Node.svelte';

	const { children, title, url }: import('mdast').Link = $props();
</script>

<a href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</a
>
