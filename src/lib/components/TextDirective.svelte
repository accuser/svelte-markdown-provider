<script lang="ts">
	import type { TextDirective } from 'mdast-util-directive';
	import Node from './Node.svelte';

	let { children, name }: TextDirective = $props();
</script>

{@html `<!-- Unrecognized text directive :${name} -->`}
<span class={name}>
	{#each children as node}<Node {...node} />{/each}
</span>
