import type { Components } from '../types/components.js';
import type { Directives } from '../types/directives.js';
import type { Root } from 'mdast';
import type { Options } from 'mdast-util-from-markdown';
declare const Markdown: import("svelte").Component<({
    ast: Root;
    src?: never;
} | {
    ast?: Root;
    src: string;
}) & {
    components?: Partial<Components>;
    directives?: Partial<Directives>;
    options?: Options;
}, {}, "ast">;
export default Markdown;
