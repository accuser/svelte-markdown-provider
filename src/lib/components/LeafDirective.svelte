<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast-util-directive').LeafDirective } = $props();

	const { children, name } = $derived(node);
</script>

{@html `<!-- Unrecognized leaf directive ::${name} -->`}
<div class={name}>
	{#each children as node}<Markdown {node} />{/each}
</div>
