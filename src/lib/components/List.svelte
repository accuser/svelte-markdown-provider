<script lang="ts" module>
	export type Props = import('mdast').List;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children, ordered, spread, start }: Props = $props();

	let tag = $derived.by(() => (ordered ? ('ol' as const) : ('ul' as const)));
</script>

<svelte:element this={tag} class:spread {start}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
