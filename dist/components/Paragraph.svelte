<script lang="ts" module>
	export type Props = import('mdast').Paragraph;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children }: Props = $props();
</script>

<p>
	{#each children as node}<Node {...node} />{/each}
</p>
