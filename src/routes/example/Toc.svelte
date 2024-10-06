<script lang="ts">
	import { getUnistContext, Node } from '@accuser/svelte-unist';
	import type { LeafDirective } from 'mdast-util-directive';
	import { toString } from 'mdast-util-to-string';
	import toc from './toc.js';

	let { children }: LeafDirective = $props();

	const { getAst } = getUnistContext();

	let { list, label = 'Contents' } = $derived.by(() => {
		if (getAst) {
			return {
				label: children && children.length ? toString(children) : 'Contents',
				list: toc(getAst?.(), { minDepth: 2, maxDepth: 3 })
			};
		}
		return {};
	});
</script>

{#if list}
	<hr />
	<strong>{label}</strong>
	<Node {...list} />
	<hr />
{/if}
