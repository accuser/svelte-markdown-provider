<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast-util-directive').ContainerDirective } = $props();

	const { children, data, name } = $derived(node);
</script>

{@html `<!-- Unrecognized container directive :::${name} -->`}
<div class={name}>
	{#each children as node}<Markdown {node} />{/each}
</div>
