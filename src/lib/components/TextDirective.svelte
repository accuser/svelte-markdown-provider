<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast-util-directive').TextDirective } = $props();

	const { attributes, children, data, name } = $derived(node);
</script>

{@html `<!-- Unrecognized text directive :${name} -->`}
<span class={name}>
	{#each children as node}<Markdown {node} />{/each}
</span>
