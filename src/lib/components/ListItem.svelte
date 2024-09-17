<script lang="ts">
	import Node from './Node.svelte';

	const { children }: import('mdast').ListItem = $props();
</script>

<li>
	{#each children as node}<Node {...node} />{/each}
</li>
