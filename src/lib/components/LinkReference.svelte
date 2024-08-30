<script lang="ts">
	import { ROOT_CONTEXT_TOKEN } from '$lib/tokens/root-context.token.js';
	import { definitions } from 'mdast-util-definitions';
	import { getContext } from 'svelte';
	import Node from './Node.svelte';

	const { node }: { node: import('mdast').LinkReference } = $props();

	const { children, data, identifier, referenceType } = $derived(node);

	const definition = definitions(getContext(ROOT_CONTEXT_TOKEN));

	const { url, title } = $derived.by(
		() => definition(identifier) ?? ({} as import('mdast').Definition)
	);
</script>

<a href={url} {title}
	>{#each children as node}<Node {node} />{/each}</a
>
