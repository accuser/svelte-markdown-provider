<script lang="ts">
	import Node from './Node.svelte';

	const { children }: import('mdast').Paragraph = $props();
</script>

<p>
	{#each children as node}<Node {...node} />{/each}
</p>
