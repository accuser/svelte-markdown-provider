<script lang="ts" module>
	import defaultAstFromString from '$lib/defaults/ast-from-string.js';
	import defaultSlugify from '$lib/defaults/slugify.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';

	export type Props = (
		| { ast: import('mdast').Root; astFromString?: never; src?: never }
		| { ast?: import('mdast').Root; astFromString?: typeof defaultAstFromString; src: string }
	) & {
		components?: Partial<Components>;
		directives?: Partial<Directives>;
		frontmatter?: Record<string, unknown>;
		slugify?: typeof defaultSlugify;
	};
</script>

<script lang="ts">
	import setMarkdownContext from '$lib/contexts/set-markdown-context.js';
	import { definitions } from 'mdast-util-definitions';
	import { toc } from 'mdast-util-toc';
	import { parse } from 'yaml';
	import Node from './Node.svelte';

	let {
		ast = $bindable(),
		astFromString = defaultAstFromString,
		components,
		directives,
		frontmatter = $bindable(),
		slugify = defaultSlugify,
		src
	}: Props = $props();

	if (src) {
		ast = astFromString(src);
	}

	if (frontmatter) {
		// do nothing
	} else if (ast && ast.children && ast.children[0] && ast.children[0].type === 'yaml') {
		frontmatter = parse(ast.children[0].value);
	} else {
		frontmatter = {};
	}

	setMarkdownContext({
		components,
		directives,
		frontmatter,
		getDefinition: definitions(ast as import('mdast').Root),
		getToc: (options) => toc(ast as import('mdast').Nodes, options),
		slugify
	});
</script>

{#if ast}
	<Node {...ast} />
{/if}
