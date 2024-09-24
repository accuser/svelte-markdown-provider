<script lang="ts" module>
	export type Props = import('mdast').TableRow & {
		data?: import('mdast').TableRowData & { align?: import('mdast').AlignType[] };
	};
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children, data }: Props = $props();

	let align = $derived(data?.align);

	let columns = $derived.by(() =>
		children.map((child, index) => ({
			...child,
			data: { ...child.data, align: align ? align[index] : undefined }
		}))
	);
</script>

<tr
	>{#each columns as column}<Node {...column} />{/each}</tr
>
