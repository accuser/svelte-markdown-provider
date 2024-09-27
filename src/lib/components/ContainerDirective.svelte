<script lang="ts">
	import type { ContainerDirective } from 'mdast-util-directive';
	import Node from './Node.svelte';

	let { children, name }: ContainerDirective = $props();
</script>

{@html `<!-- Unrecognized container directive :::${name} -->`}
<div class={name}>
	{#each children as node}<Node {...node} />{/each}
</div>
