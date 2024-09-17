<script lang="ts">
	import Node from './Node.svelte';

	const { children }: import('mdast').Delete = $props();
</script>

<del
	>{#each children as node}<Node {...node} />{/each}</del
>
