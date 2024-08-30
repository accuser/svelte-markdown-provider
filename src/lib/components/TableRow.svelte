<script lang="ts">
	import { TABLE_ROW_CONTEXT_TOKEN } from '$lib/tokens/table-row-context.token.js';
	import { setContext } from 'svelte';
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').TableRow } = $props();

	const { children } = setContext(TABLE_ROW_CONTEXT_TOKEN, node);
</script>

<tr
	>{#each children as node}<Node {node} />{/each}</tr
>
