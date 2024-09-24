<script lang="ts" module>
	export type Props = import('mdast').Blockquote;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children }: Props = $props();
</script>

<blockquote>
	{#each children as node}<Node {...node} />{/each}
</blockquote>
