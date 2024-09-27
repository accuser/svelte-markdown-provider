import type { Components } from './components.js';
import type { Directives } from './directives.js';
export interface MarkdownContext {
    components?: Partial<Components>;
    directives?: Partial<Directives>;
    getAst: ReturnType<typeof import('../builders/ast-builder.js').default>;
    getDefinition: ReturnType<typeof import('../builders/definition-builder.js').default>;
    getFrontmatter: ReturnType<typeof import('../builders/frontmatter-builder.js').default>;
}
