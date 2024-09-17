<script lang="ts">
	import { TABLE_CONTEXT_TOKEN } from '$lib/tokens/table-context.token.js';
	import { setContext } from 'svelte';
	import Node from './Node.svelte';

	const node: import('mdast').Table = $props();

	setContext(TABLE_CONTEXT_TOKEN, node);

	const {
		children: [head, ...rows]
	} = $derived(node);
</script>

<table>
	{#if head}
		<thead>
			<Node {...head} />
		</thead>
	{/if}
	{#if rows.length}
		<tbody>
			{#each rows as node}<Node {...node} />{/each}
		</tbody>
	{/if}
</table>
