<script lang="ts">
	import { TABLE_CONTEXT_TOKEN } from '$lib/tokens/table-context.token.js';
	import { setContext } from 'svelte';
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast').Table } = $props();

	const {
		align,
		children: [head, ...rows],
		data
	} = setContext(TABLE_CONTEXT_TOKEN, node);
</script>

<table>
	{#if head}
		<thead>
			<Markdown node={head} />
		</thead>
	{/if}
	{#if rows.length}
		<tbody>
			{#each rows as node}<Markdown {node} />{/each}
		</tbody>
	{/if}
</table>
