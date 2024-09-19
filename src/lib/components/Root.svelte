<script lang="ts" module>
	export type Props = import('mdast').Root;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	const { children }: Props = $props();
</script>

{#each children as node}<Node {...node} />{/each}
