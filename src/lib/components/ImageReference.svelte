<script lang="ts">
	import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context-token.js';
	import type { MarkdownContext } from '$lib/types/markdown-context.js';
	import { getContext } from 'svelte';

	// TODO: implement `referenceType`?
	const { alt, identifier }: import('mdast').ImageReference = $props();

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

<img src={url} {alt} {title} />
