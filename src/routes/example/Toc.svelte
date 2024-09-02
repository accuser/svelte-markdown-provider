<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import { ROOT_CONTEXT_TOKEN } from '$lib/tokens/root-context.token.js';
	import { toString } from 'mdast-util-to-string';
	import { toc } from 'mdast-util-toc';
	import { getContext } from 'svelte';

	const { node }: { node: import('mdast-util-directive').TextDirective } = $props();

	const { children } = $derived(node);

	const { contents, label = 'Contents' } = $derived.by(() => ({
		label: children && children.length ? toString(children) : 'Contents',
		contents: {
			type: 'root',
			children: [toc(getContext(ROOT_CONTEXT_TOKEN), { minDepth: 2, maxDepth: 3 }).map]
		} as import('mdast').Root
	}));
</script>

<hr />
<strong>{label}</strong>
<Node node={contents} />
<hr />
