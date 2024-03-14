<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast-util-directive').LeafDirective;

	const { children, name } = node;

	console.warn('Unrecognized leaf directive:', name);
</script>

<div class={name}>
	{#each children as node}<Markdown {node} />{/each}
</div>
