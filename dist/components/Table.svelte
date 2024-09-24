<script lang="ts" module>
	export type Props = import('mdast').Table;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { align, children }: Props = $props();

	let [head, ...rows] = $derived.by(() =>
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
