<script lang="ts">
	import astBuilder from '$lib/builders/ast-builder.js';
	import definitionBuilder from '$lib/builders/definition-builder.js';
	import frontmatterBuilder from '$lib/builders/frontmatter-builder.js';
	import { setMarkdownContext } from '$lib/contexts/markdown-context.js';
	import astFromString from '$lib/defaults/ast-from-string.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';
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

	$effect(() => {
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
