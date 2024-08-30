<script lang="ts">
	import { ROOT_CONTEXT_TOKEN } from '$lib/tokens/root-context.token.js';
	import { setContext } from 'svelte';
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').Root } = $props();

	const { children } = setContext(ROOT_CONTEXT_TOKEN, node);
</script>

{#each children as node}<Node {node} />{/each}
