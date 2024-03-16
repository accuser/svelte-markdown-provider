<script lang="ts">
	import { TABLE_CONTEXT_TOKEN } from '$lib/tokens/table-context.token.js';
	import { TABLE_ROW_CONTEXT_TOKEN } from '$lib/tokens/table-row-context.token.js';
	import { getContext } from 'svelte';
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').TableCell;

	const { children } = node;

	const table = getContext<import('mdast').Table>(TABLE_CONTEXT_TOKEN);
	const row = getContext<import('mdast').TableRow>(TABLE_ROW_CONTEXT_TOKEN);

	const align = table && table.align && row ? table.align[row.children.indexOf(node)] : undefined;
</script>

<td {align}
	>{#each children as node}<Markdown {node} />{/each}</td
>
