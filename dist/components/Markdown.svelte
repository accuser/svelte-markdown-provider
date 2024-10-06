<script lang="ts" module>
	declare module '@accuser/svelte-unist' {
		export interface UnistContext {
			getAst: ReturnType<typeof astBuilder>;
			getFrontmatter: ReturnType<typeof frontmatterBuilder>;
		}
	}
</script>

<script lang="ts">
	import astBuilder from '../builders/ast-builder.js';
	import frontmatterBuilder from '../builders/frontmatter-builder.js';
	import markdownComponents from '../defaults/markdown-components.js';
	import { setUnistContext, Unist, type Props } from '@accuser/svelte-unist';
	import type { Root } from 'mdast';

	let { ast, components, ...rest }: { ast: Root } & Props = $props();

	let getAst = $derived.by(() => astBuilder(ast));
	let getFrontmatter = $derived.by(() => frontmatterBuilder(ast));

	setUnistContext({ getAst: () => getAst(), getFrontmatter: () => getFrontmatter() });
</script>

<Unist {ast} components={{ ...markdownComponents, ...components }} {...rest} />
