import type { Components } from './components.js';
import type { Directives } from './directives.js';

export interface MarkdownContext {
	components?: Partial<Components>;
	directives?: Partial<Directives>;
	getDefinition: ReturnType<typeof import('$lib/builders/definition-builder.js').default>;
	getFrontmatter: ReturnType<typeof import('$lib/builders/frontmatter-builder.js').default>;
	getToc: ReturnType<typeof import('$lib/builders/toc-builder.js').default>;
}
