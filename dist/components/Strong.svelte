<script lang="ts" module>
	export type Props = import('mdast').Strong;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children }: Props = $props();
</script>

<strong
	>{#each children as node}<Node {...node} />{/each}</strong
>
