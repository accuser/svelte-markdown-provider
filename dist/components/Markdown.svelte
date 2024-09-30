<script lang="ts">
	import astBuilder from '../builders/ast-builder.js';
	import definitionBuilder from '../builders/definition-builder.js';
	import frontmatterBuilder from '../builders/frontmatter-builder.js';
	import { setMarkdownContext } from '../contexts/markdown-context.js';
	import astFromString from '../defaults/ast-from-string.js';
	import type { Components } from '../types/components.js';
	import type { Directives } from '../types/directives.js';
	import type { Root } from 'mdast';
	import type { Options } from 'mdast-util-from-markdown';
	import Node from './Node.svelte';

	let {
		ast = $bindable(),
		components,
		directives,
		options,
		src
	}: ({ ast: Root; src?: never } | { ast?: Root; src: string }) & {
		components?: Partial<Components>;
		directives?: Partial<Directives>;
		options?: Options;
	} = $props();

	$effect.pre(() => {
		if (src) {
			ast = astFromString(src, options);
		}
	});

	let getAst = $derived.by(() => astBuilder(ast));
	let getDefinition = $derived.by(() => definitionBuilder(ast));
	let getFrontmatter = $derived.by(() => frontmatterBuilder(ast));

	setMarkdownContext({
		components,
		directives,
		getAst: () => getAst(),
		getFrontmatter: () => getFrontmatter(),
		getDefinition: (identifier) => getDefinition(identifier)
	});
</script>

{#if ast}
	<Node {...ast} />
{/if}
