declare module '@accuser/svelte-unist' {
    interface UnistContext {
        getAst: ReturnType<typeof astBuilder>;
        getFrontmatter: ReturnType<typeof frontmatterBuilder>;
    }
}
import astBuilder from '../builders/ast-builder.js';
import frontmatterBuilder from '../builders/frontmatter-builder.js';
import { type Props } from '@accuser/svelte-unist';
import type { Root } from 'mdast';
declare const Markdown: import("svelte").Component<{
    ast: Root;
} & Props, {}, "">;
export default Markdown;
