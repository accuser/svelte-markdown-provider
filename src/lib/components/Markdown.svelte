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
	import { setMmarkdownContext } from '$lib/contexts/markdown-context.js';
	import { isRoot, isYaml } from '@accuser/mdast-util-type-guards';
	import { definitions } from 'mdast-util-definitions';
	import { toc } from 'mdast-util-toc';
	import { parse } from 'yaml';
	import Node from './Node.svelte';

	let { ast = $bindable(), frontmatter = $bindable(), ...constants }: Props = $props();

	const {
		astFromString = defaultAstFromString,
		components,
		directives,
		slugify = defaultSlugify,
		src
	} = constants;

	if (src) {
		ast = astFromString(src);
	}

	if (frontmatter) {
		// do nothing - frontmatter is already set
	} else if (isRoot(ast) && ast.children.length > 0 && isYaml(ast.children[0])) {
		frontmatter = parse(ast.children[0].value);
	} else {
		frontmatter = {};
	}

	setMmarkdownContext({
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
