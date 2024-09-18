<script lang="ts">
	import Node from './Node.svelte';

	type Props = import('mdast').TableCell & {
		data?: import('mdast').TableCellData & { align?: import('mdast').AlignType };
	};

	const { children, data }: Props = $props();

	const align = $derived(data?.align);
</script>

<td {align}
	>{#each children as node}<Node {...node} />{/each}</td
>
