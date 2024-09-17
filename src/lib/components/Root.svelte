<script lang="ts">
	import { ROOT_CONTEXT_TOKEN } from '$lib/tokens/root-context.token.js';
	import { setContext } from 'svelte';
	import Node from './Node.svelte';

	const node: import('mdast').Root = $props();

	setContext(ROOT_CONTEXT_TOKEN, node);

	const { children } = $derived(node);
</script>

{#each children as node}<Node {...node} />{/each}
