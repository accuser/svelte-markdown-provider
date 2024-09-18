<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context-token.js';
	import type { MarkdownContext } from '$lib/types/markdown-context.js';
	import { toString } from 'mdast-util-to-string';
	import { getContext } from 'svelte';

	const { children }: import('mdast-util-directive').LeafDirective = $props();

	const { contents, label = 'Contents' } = $derived.by(() => {
		const { getToc } = getContext<MarkdownContext>(MARKDOWN_CONTEXT_TOKEN);

		return {
			label: children && children.length ? toString(children) : 'Contents',
			contents: {
				type: 'root',
				children: [getToc({ minDepth: 2, maxDepth: 3 }).map]
			} as import('mdast').Root
		};
	});
</script>

<hr />
<strong>{label}</strong>
<Node {...contents} />
<hr />
