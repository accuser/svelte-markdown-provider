<script lang="ts">
	import { ROOT_CONTEXT_TOKEN } from '$lib/tokens/root-context.token.js';
	import { setContext } from 'svelte';
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').Root;

	const { children } = setContext(ROOT_CONTEXT_TOKEN, node);
</script>

{#each children as node}<Markdown {node} />{/each}
