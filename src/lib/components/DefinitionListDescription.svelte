<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Parent & { type: 'defListDescription' };

	const { children } = node;
</script>

<dd>
	{#each children as node}<Markdown {node} />{/each}
</dd>
