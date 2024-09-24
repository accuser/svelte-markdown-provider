<script lang="ts" module>
	export type Props = import('mdast').Emphasis;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children }: Props = $props();
</script>

<em
	>{#each children as node}<Node {...node} />{/each}</em
>
