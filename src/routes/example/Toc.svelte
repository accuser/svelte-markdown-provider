<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import { getMarkdownContext } from '$lib/contexts/markdown-context.js';
	import { toString } from 'mdast-util-to-string';

	let { children }: import('mdast-util-directive').LeafDirective = $props();

	const { getToc } = getMarkdownContext();

	let { contents, label = 'Contents' } = $derived.by(() => {
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
