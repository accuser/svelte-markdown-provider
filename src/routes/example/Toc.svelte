<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import { getMarkdownContext } from '$lib/contexts/markdown-context.js';
	import type { LeafDirective } from 'mdast-util-directive';
	import { toString } from 'mdast-util-to-string';
	import toc from './toc.js';

	let { children }: LeafDirective = $props();

	const { getAst } = getMarkdownContext();

	let { list, label = 'Contents' } = $derived.by(() => ({
		label: children && children.length ? toString(children) : 'Contents',
		list: toc(getAst(), { minDepth: 2, maxDepth: 3 })
	}));
</script>

<hr />
<strong>{label}</strong>
<Node {...list} />
<hr />
