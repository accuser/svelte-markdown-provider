import type astBuilder from '../builders/ast-builder.js';
import type frontmatterBuilder from '../builders/frontmatter-builder.js';
import type { Components } from '@accuser/svelte-unist';
declare module '@accuser/svelte-unist' {
    interface Context {
        getAst: ReturnType<typeof astBuilder>;
        getFrontmatter: ReturnType<typeof frontmatterBuilder>;
    }
}
declare const _default: Components;
export default _default;
