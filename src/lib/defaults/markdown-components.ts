import type astBuilder from '$lib/builders/ast-builder.js';
import type frontmatterBuilder from '$lib/builders/frontmatter-builder.js';
import { mdastComponents } from '@accuser/svelte-mdast';
import { mdastDirectiveComponents } from '@accuser/svelte-mdast-directive';
import type { Components } from '@accuser/svelte-unist';

declare module '@accuser/svelte-unist' {
	export interface Context {
		getAst: ReturnType<typeof astBuilder>;
		getFrontmatter: ReturnType<typeof frontmatterBuilder>;
	}
}

export default {
	...mdastComponents,
	...mdastDirectiveComponents
} as Components;
