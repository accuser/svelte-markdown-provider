<script lang="ts">
	import Node from './Node.svelte';

	const { children }: import('mdast').Blockquote = $props();
</script>

<blockquote>
	{#each children as node}<Node {...node} />{/each}
</blockquote>
