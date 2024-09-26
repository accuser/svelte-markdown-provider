<script lang="ts" module>
	import type { Components } from '../types/components.js';
	import type { Directives } from '../types/directives.js';

	export type Props = {
		components?: Partial<Components>;
		directives?: Partial<Directives>;
		options?: import('mdast-util-from-markdown').Options;
		src: string;
	};
</script>

<script lang="ts">
	import definitionBuilder from '../builders/definition-builder.js';
	import frontmatterBuilder from '../builders/frontmatter-builder.js';
	import tocBuilder from '../builders/toc-builder.js';
	import { setMarkdownContext } from '../contexts/markdown-context.js';
	import astFromString from '../defaults/ast-from-string.js';
	import Node from './Node.svelte';

	let { components, directives, options, src }: Props = $props();

	let mdast = $derived.by(() => astFromString(src, options));

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
