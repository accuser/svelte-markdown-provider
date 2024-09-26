import { collect } from '$lib/defaults/collect.js';
import { isHeading } from '@accuser/mdast-util-type-guards';
import { slug } from 'github-slugger';
import { toString } from 'mdast-util-to-string';

type Depth = import('mdast').Heading['depth'];

export type Options = {
	minDepth?: Depth;
	maxDepth?: Depth;
	ordered?: boolean;
};

const headingsFrom = (root: import('mdast').Root, minDepth: Depth, maxDepth: Depth) => {
	const is = (node: unknown): node is import('mdast').Heading =>
		isHeading(node) && node.depth >= minDepth && node.depth <= maxDepth;

	return collect(root, is);
};

export default (root: import('mdast').Root) =>
	({ minDepth = 1, maxDepth = 6, ordered }: Options = {}) =>
		headingsFrom(root, minDepth, maxDepth).reduce(
			(acc, { children, data: { text = toString(children), id = slug(text) } = {} }) => {
				acc.children.push({
					type: 'listItem',
					children: [
						{
							type: 'paragraph',
							children: [
								{
									type: 'link',
									children: [{ type: 'text', value: text }],
									url: `#${id}`
								}
							]
						}
					]
				});

				return acc;
			},
			{ type: 'list' as const, ordered, children: [] } as import('mdast').List
		);
