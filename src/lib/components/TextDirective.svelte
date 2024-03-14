<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast-util-directive').TextDirective;

	const { attributes, children, name } = node;

	console.warn('Unrecognized text directive:', name);
</script>

<div class={name}>
	{#each children as node}<Markdown {node} />{/each}
</div>
