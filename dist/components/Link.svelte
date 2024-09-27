<script lang="ts">
	import type { Link } from 'mdast';
	import Node from './Node.svelte';

	let { children, title, url }: Link = $props();
</script>

<a href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</a
>
