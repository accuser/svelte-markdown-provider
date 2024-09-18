<script lang="ts">
	import Node from './Node.svelte';

	const { children }: import('mdast').Root = $props();
</script>

{#each children as node}<Node {...node} />{/each}
