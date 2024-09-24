<script lang="ts" module>
	export type Props = import('mdast').TableCell & {
		data?: import('mdast').TableCellData & { align?: import('mdast').AlignType };
	};
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children, data }: Props = $props();

	let align = $derived(data?.align);
</script>

<td {align}
	>{#each children as node}<Node {...node} />{/each}</td
>
