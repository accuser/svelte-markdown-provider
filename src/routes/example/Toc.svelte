<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import { getMarkdownContext } from '$lib/contexts/markdown-context.js';
	import { toString } from 'mdast-util-to-string';

	let { children }: import('mdast-util-directive').LeafDirective = $props();

	const { getToc } = getMarkdownContext();

	let { toc, label = 'Contents' } = $derived.by(() => ({
		label: children && children.length ? toString(children) : 'Contents',
		toc: getToc({ minDepth: 2, maxDepth: 3 })
	}));
</script>

<hr />
<strong>{label}</strong>
<Node {...toc} />
<hr />
