<script lang="ts" module>
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';
	import type { Root } from 'mdast';
	import type { Options } from 'mdast-util-from-markdown';

	type Props = ({ ast: Root; src?: never } | { ast?: never; src: string }) & {
		components?: Partial<Components>;
		directives?: Partial<Directives>;
		options?: Options;
	};
</script>

<script lang="ts">
	import definitionBuilder from '$lib/builders/definition-builder.js';
	import frontmatterBuilder from '$lib/builders/frontmatter-builder.js';
	import tocBuilder from '$lib/builders/toc-builder.js';
	import { setMarkdownContext } from '$lib/contexts/markdown-context.js';
	import astFromString from '$lib/defaults/ast-from-string.js';
	import Node from './Node.svelte';

	let { ast, components, directives, options, src }: Props = $props();

	let mdast = $derived.by(() => {
		if (src) {
			return astFromString(src, options);
		} else if (ast) {
			return ast;
		}

		throw new Error('Either `ast` or `src` must be provided');
	});

	let getDefinition = $derived.by(() => definitionBuilder(mdast));
	let getFrontmatter = $derived.by(() => frontmatterBuilder(mdast));
	let getToc = $derived.by(() => tocBuilder(mdast));

	setMarkdownContext({
		components,
		directives,
		getFrontmatter: () => getFrontmatter(),
		getDefinition: (identifier) => getDefinition(identifier),
		getToc: (options) => getToc(options)
	});
</script>

<Node {...mdast} />
