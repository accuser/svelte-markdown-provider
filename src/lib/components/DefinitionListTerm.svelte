<script lang="ts">
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Parent & { type: 'defListTerm' };

	const { children } = node;
</script>

<dt>
	{#each children as node}<Markdown {node} />{/each}
</dt>
