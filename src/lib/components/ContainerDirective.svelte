<script lang="ts">
	import Node from './Node.svelte';

	const { children, name }: import('mdast-util-directive').ContainerDirective = $props();
</script>

{@html `<!-- Unrecognized container directive :::${name} -->`}
<div class={name}>
	{#each children as node}<Node {...node} />{/each}
</div>
