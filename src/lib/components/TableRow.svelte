<script lang="ts">
	import Node from './Node.svelte';

	type Props = import('mdast').TableRow & {
		data?: import('mdast').TableRowData & { align?: import('mdast').AlignType[] };
	};

	const { children, data }: Props = $props();

	const align = $derived(data?.align);

	const columns = $derived.by(() =>
		children.map((child, index) => ({
			...child,
			data: { ...child.data, align: align ? align[index] : undefined }
		}))
	);
</script>

<tr
	>{#each columns as column}<Node {...column} />{/each}</tr
>
