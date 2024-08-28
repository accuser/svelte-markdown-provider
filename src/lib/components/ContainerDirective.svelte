<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast-util-directive').ContainerDirective } = $props();

	const { children, data, name } = $derived(node);

	console.warn('Unrecognized container directive:', name);
</script>

<div class={name}>
	{#each children as node}<Markdown {node} />{/each}
</div>
