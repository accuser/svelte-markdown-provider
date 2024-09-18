import type { Components } from './components.js';
import type { Directives } from './directives.js';

export interface MarkdownContext {
	components?: Partial<Components>;
	directives?: Partial<Directives>;
	getDefinition: import('mdast-util-definitions').GetDefinition;
	getToc: (options?: import('mdast-util-toc').Options) => import('mdast-util-toc').Result;
	slugify: (value: string) => string;
}
