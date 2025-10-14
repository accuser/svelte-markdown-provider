import type { astBuilder } from '$lib/builders/ast-builder.js';
import type { frontmatterBuilder } from '$lib/builders/frontmatter-builder.js';

declare module '@accuser/svelte-unist' {
	export interface UnistContext {
		getAst?: ReturnType<typeof astBuilder>;
		getFrontmatter?: ReturnType<typeof frontmatterBuilder>;
	}
}

export { default as Markdown } from './markdown.svelte';
