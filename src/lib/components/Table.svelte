<script lang="ts">
	import TableRow from './TableRow.svelte';

	const { align, children }: import('mdast').Table = $props();

	const [head, ...rows] = $derived(children);
</script>

<table>
	{#if head}
		<thead>
			<TableRow {...head} />
		</thead>
	{/if}
	{#if rows.length}
		<tbody>
			{#each rows as node}<TableRow {...node} data-align={align} />{/each}
		</tbody>
	{/if}
</table>
