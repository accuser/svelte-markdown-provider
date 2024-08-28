<script lang="ts">
	import Markdown from './Markdown.svelte';

	const { node }: { node: import('mdast-util-directive').TextDirective } = $props();

	const { attributes, children, data, name } = $derived(node);
</script>

<!-- Unrecognized text directive: {name} -->
<div class={name}>
	{#each children as node}<Markdown {node} />{/each}
</div>
