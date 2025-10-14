<script lang="ts">
	import { getUnistContext, Node } from '@accuser/svelte-unist';
	import { toString } from 'mdast-util-to-string';
	import toc from './toc.js';

	let { node }: { node: import('mdast-util-directive').LeafDirective } = $props();

	let { children } = $derived(node);

	let { getAst } = getUnistContext();

	let { list, label = 'Contents' } = $derived(
		getAst
			? {
					label: children && children.length ? toString(children) : 'Contents',
					list: toc(getAst(), { minDepth: 2, maxDepth: 3 })
				}
			: {}
	);
</script>

{#if list}
	<hr />
	<strong>{label}</strong>
	<Node node={list} />
	<hr />
{/if}
