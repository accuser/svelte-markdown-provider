import type { Components } from '../types/components.js';
import type { Directives } from '../types/directives.js';
import type { Root } from 'mdast';
import type { Options } from 'mdast-util-from-markdown';
type Props = ({
    ast: Root;
    src?: never;
} | {
    ast?: never;
    src: string;
}) & {
    components?: Partial<Components>;
    directives?: Partial<Directives>;
    options?: Options;
};
declare const Markdown: import("svelte").Component<Props, {}, "">;
export default Markdown;
