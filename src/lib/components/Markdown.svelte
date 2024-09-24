<script lang="ts" module>
	import defaultSlugify from '$lib/defaults/slugify.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';

	export type Props = {
		components?: Partial<Components>;
		directives?: Partial<Directives>;
		frontmatter?: Record<string, unknown>;
		slugify?: typeof defaultSlugify;
		src: string;
	};
</script>

<script lang="ts">
	import { setMarkdownContext } from '$lib/contexts/markdown-context.js';
	import astFromString from '$lib/defaults/ast-from-string.js';
	import frontmatterFromAst from '$lib/defaults/frontmatter-from-ast.js';
	import { definitions } from 'mdast-util-definitions';
	import { toc } from 'mdast-util-toc';
	import Node from './Node.svelte';

	let { components, directives, slugify = defaultSlugify, src }: Props = $props();

	let ast = $derived.by(() => astFromString(src));
	let definition = $derived.by(() => definitions(ast));
	let frontmatter = $derived.by(() => frontmatterFromAst(ast));

	setMarkdownContext({
		components,
		directives,
		getFrontmatter: () => frontmatter,
		getDefinition: (identifier) => definition(identifier),
		getToc: (options) => toc(ast, options),
		slugify
	});
</script>

{#if ast}
	<Node {...ast} />
{/if}
