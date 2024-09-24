<script lang="ts" module>
	export type Props = import('mdast-util-directive').LeafDirective;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children, name }: Props = $props();
</script>

{@html `<!-- Unrecognized leaf directive ::${name} -->`}
<div class={name}>
	{#each children as node}<Node {...node} />{/each}
</div>
