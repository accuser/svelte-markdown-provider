<script lang="ts">
	import { TABLE_CONTEXT_TOKEN } from '$lib/tokens/table-context.token.js';
	import { setContext } from 'svelte';
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Table;

	const {
		children: [head, ...rows]
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
