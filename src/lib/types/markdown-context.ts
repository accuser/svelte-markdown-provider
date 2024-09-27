import type { Components } from './components.js';
import type { Directives } from './directives.js';

export interface MarkdownContext {
	components?: Partial<Components>;
	directives?: Partial<Directives>;
	getAst: ReturnType<typeof import('$lib/builders/ast-builder.js').default>;
	getDefinition: ReturnType<typeof import('$lib/builders/definition-builder.js').default>;
	getFrontmatter: ReturnType<typeof import('$lib/builders/frontmatter-builder.js').default>;
}
