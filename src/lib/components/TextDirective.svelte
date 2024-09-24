<script lang="ts" module>
	export type Props = import('mdast-util-directive').TextDirective;
</script>

<script lang="ts">
	import Node from './Node.svelte';

	let { children, name }: Props = $props();
</script>

{@html `<!-- Unrecognized text directive :${name} -->`}
<span class={name}>
	{#each children as node}<Node {...node} />{/each}
</span>
