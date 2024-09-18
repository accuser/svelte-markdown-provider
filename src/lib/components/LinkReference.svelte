<script lang="ts">
	import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context-token.js';
	import type { MarkdownContext } from '$lib/types/markdown-context.js';
	import { getContext } from 'svelte';
	import Node from './Node.svelte';

	// TODO: implement `referenceType`?
	const { children, identifier }: import('mdast').LinkReference = $props();

	const { url, title } = $derived.by(() => {
		const { getDefinition } = getContext<MarkdownContext>(MARKDOWN_CONTEXT_TOKEN);

		const definition = getDefinition(identifier);

		if (definition) {
			return definition;
		} else {
			return { url: '#', title: undefined };
		}
	});
</script>

<a href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</a
>
