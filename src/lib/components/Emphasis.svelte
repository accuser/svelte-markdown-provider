<script lang="ts">
	import Node from './Node.svelte';

	const { children }: import('mdast').Emphasis = $props();
</script>

<em
	>{#each children as node}<Node {...node} />{/each}</em
>
