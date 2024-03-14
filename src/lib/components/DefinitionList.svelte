<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Parent & { type: 'defList' };

	const { children } = node;
</script>

<dl>
	{#each children as node}<Markdown {node} />{/each}
</dl>
