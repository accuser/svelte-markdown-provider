<script lang="ts">
	import defaultAstFromString from '$lib/defaults/ast-from-string.js';
	import defaultSlugify from '$lib/defaults/slugify.js';
	import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context-token.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';
	import type { MarkdownContext } from '$lib/types/markdown-context.js';
	import { definitions } from 'mdast-util-definitions';
	import { toc } from 'mdast-util-toc';
	import { setContext } from 'svelte';
	import Node from './Node.svelte';

	type Props = (
		| { ast: import('mdast').Root; astFromString?: never; src?: never }
		| { ast?: import('mdast').Root; astFromString?: typeof defaultAstFromString; src: string }
	) & {
		components?: Partial<Components>;
		directives?: Partial<Directives>;
		slugify?: typeof defaultSlugify;
	};

	const {
		astFromString = defaultAstFromString,
		src,
		ast = $bindable(src ? astFromString(src) : undefined),
		components,
		directives,
		slugify = defaultSlugify
	}: Props = $props();

	setContext<MarkdownContext>(MARKDOWN_CONTEXT_TOKEN, {
		components,
		directives,
		getDefinition: definitions(ast),
		getToc: (options) => toc(ast, options),
		slugify
	});
</script>

{#if ast}
	<Node {...ast} />
{/if}
