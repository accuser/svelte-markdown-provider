<script lang="ts">
	import { astBuilder } from '../../builders/ast-builder.js';
	import { frontmatterBuilder } from '../../builders/frontmatter-builder.js';
	import { isRoot } from '@accuser/mdast-util-type-guards';
	import { definitionBuilder, components as mdastComponents } from '@accuser/svelte-mdast';
	import { components as mdastDirectiveComponents } from '@accuser/svelte-mdast-directive';
	import { components as mdastGfmComponents } from '@accuser/svelte-mdast-gfm';
	import { components as mdastMathComponents } from '@accuser/svelte-mdast-math';
	import { Unist } from '@accuser/svelte-unist';
	import type { ComponentProps } from 'svelte';

	let {
		ast,
		components,
		getAst = isRoot(ast) ? astBuilder(ast) : undefined,
		getDefinition = isRoot(ast) ? definitionBuilder(ast) : undefined,
		getFrontmatter = isRoot(ast) ? frontmatterBuilder(ast) : undefined,
		...rest
	}: ComponentProps<typeof Unist> = $props();
</script>

<Unist
	{ast}
	components={{
		...mdastComponents,
		...mdastDirectiveComponents,
		...mdastGfmComponents,
		...mdastMathComponents,
		...components
	}}
	{getAst}
	{getDefinition}
	{getFrontmatter}
	{...rest}
/>
