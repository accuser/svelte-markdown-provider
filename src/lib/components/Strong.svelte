<script lang="ts">
	import Node from './Node.svelte';

	const { children }: import('mdast').Strong = $props();
</script>

<strong
	>{#each children as node}<Node {...node} />{/each}</strong
>
