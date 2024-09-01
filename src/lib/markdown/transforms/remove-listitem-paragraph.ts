import type { Transform } from 'mdast-util-from-markdown';
import { CONTINUE, visit } from 'unist-util-visit';

export default ((ast) =>
	visit(ast, 'listItem', (node) => {
		if (node.children && node.children.length === 1 && node.children[0].type === 'paragraph') {
			node.children = node.children[0].children as typeof node.children;
		}

		return CONTINUE;
	})) satisfies Transform;
