<script lang="ts">
	import Node from './Node.svelte';

	const { children, name }: import('mdast-util-directive').TextDirective = $props();
</script>

{@html `<!-- Unrecognized text directive :${name} -->`}
<span class={name}>
	{#each children as node}<Node {...node} />{/each}
</span>
