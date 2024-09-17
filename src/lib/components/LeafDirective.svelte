<script lang="ts">
	import Node from './Node.svelte';

	const { children, name }: import('mdast-util-directive').LeafDirective = $props();
</script>

{@html `<!-- Unrecognized leaf directive ::${name} -->`}
<div class={name}>
	{#each children as node}<Node {...node} />{/each}
</div>
