<script lang="ts" module>
	export type Props = import('mdast').Table;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	const { align, children }: Props = $props();

	const [head, ...rows] = $derived.by(() =>
		children.map((child) => ({
			...child,
			data: { ...child.data, align }
		}))
	);
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
