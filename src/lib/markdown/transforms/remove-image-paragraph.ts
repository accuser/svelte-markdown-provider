import type { Transform } from 'mdast-util-from-markdown';
import { CONTINUE, visitParents } from 'unist-util-visit-parents';

export default ((ast) =>
	visitParents(ast, 'image', (node, ancestors) => {
		const parent = ancestors.at(-1);

		if (parent && parent.type === 'paragraph' && parent.children.length === 1) {
			Object.assign(parent, node);
		}

		return CONTINUE;
	})) satisfies Transform;
