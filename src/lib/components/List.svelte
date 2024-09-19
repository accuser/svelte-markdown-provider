<script lang="ts" module>
	export type Props = import('mdast').List;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	const { children, ordered, spread, start }: Props = $props();

	const tag = $derived.by(() => (ordered ? 'ol' : 'ul'));
</script>

<svelte:element this={tag} class:spread {start}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
