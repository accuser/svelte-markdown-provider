<script lang="ts" module>
	export type Props = import('mdast').Link;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children, title, url }: Props = $props();
</script>

<a href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</a
>
