<script lang="ts" module>
	import type { Components } from '../types/components.js';
	import type { Directives } from '../types/directives.js';
	import type { Root } from 'mdast';
	import type { Options } from 'mdast-util-from-markdown';

	type Props = ({ ast: Root; src?: never } | { ast?: never; src: string }) & {
		components?: Partial<Components>;
		directives?: Partial<Directives>;
		options?: Options;
	};
</script>

<script lang="ts">
	import astBuilder from '../builders/ast-builder.js';
	import definitionBuilder from '../builders/definition-builder.js';
	import frontmatterBuilder from '../builders/frontmatter-builder.js';
	import { setMarkdownContext } from '../contexts/markdown-context.js';
	import astFromString from '../defaults/ast-from-string.js';
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

	let getAst = $derived.by(() => astBuilder(mdast));
	let getDefinition = $derived.by(() => definitionBuilder(mdast));
	let getFrontmatter = $derived.by(() => frontmatterBuilder(mdast));

	setMarkdownContext({
		components,
		directives,
		getAst: () => getAst(),
		getFrontmatter: () => getFrontmatter(),
		getDefinition: (identifier) => getDefinition(identifier)
	});
</script>

<Node {...mdast} />
