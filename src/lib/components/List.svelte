<script lang="ts">
	import Node from './Node.svelte';

	const { children, ordered, spread, start }: import('mdast').List = $props();

	const tag = $derived.by(() => (ordered ? 'ol' : 'ul'));
</script>

<svelte:element this={tag} class:spread {start}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
