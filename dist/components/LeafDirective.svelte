<script lang="ts">
	import type { LeafDirective } from 'mdast-util-directive';
	import Node from './Node.svelte';

	let { children, name }: LeafDirective = $props();
</script>

{@html `<!-- Unrecognized leaf directive ::${name} -->`}
<div class={name}>
	{#each children as node}<Node {...node} />{/each}
</div>
