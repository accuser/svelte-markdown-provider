<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast-util-directive').ContainerDirective;

	const { children, name } = node;

	console.warn('Unrecognized container directive:', name);
</script>

<div class={name}>
	{#each children as node}<Markdown {node} />{/each}
</div>
