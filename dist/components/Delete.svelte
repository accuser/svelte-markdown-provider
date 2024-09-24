<script lang="ts" module>
	export type Props = import('mdast').Delete;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children }: Props = $props();
</script>

<del
	>{#each children as node}<Node {...node} />{/each}</del
>
