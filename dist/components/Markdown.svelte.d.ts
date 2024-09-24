import defaultSlugify from '../defaults/slugify.js';
import type { Components } from '../types/components.js';
import type { Directives } from '../types/directives.js';
export type Props = {
    components?: Partial<Components>;
    directives?: Partial<Directives>;
    frontmatter?: Record<string, unknown>;
    slugify?: typeof defaultSlugify;
    src: string;
};
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Markdown: $$__sveltets_2_IsomorphicComponent<Props, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Markdown = InstanceType<typeof Markdown>;
export default Markdown;
