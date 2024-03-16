<script lang="ts">
	import { TABLE_ROW_CONTEXT_TOKEN } from '$lib/tokens/table-row-context.token.js';
	import { setContext } from 'svelte';
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').TableRow;

	const { children } = setContext(TABLE_ROW_CONTEXT_TOKEN, node);
</script>

<tr
	>{#each children as node}<Markdown {node} />{/each}</tr
>
