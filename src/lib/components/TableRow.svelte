<script lang="ts">
	import TableCell from './TableCell.svelte';

	type Props = import('mdast').TableRow & { 'data-align'?: import('mdast').AlignType[] | null };

	const { children, 'data-align': align }: Props = $props();
</script>

<tr
	>{#each children as node, index}<TableCell
			{...node}
			data-align={align ? align[index] : undefined}
		/>{/each}</tr
>
