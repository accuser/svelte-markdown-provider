<script lang="ts">
	import Node from './Node.svelte';

	type Props = import('mdast').TableCell & { 'data-align'?: import('mdast').AlignType };

	const { children, 'data-align': align }: Props = $props();
</script>

<td {align}
	>{#each children as node}<Node {...node} />{/each}</td
>
