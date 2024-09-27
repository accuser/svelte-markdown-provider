import { collect } from '$lib/defaults/collect.js';
import { isHeading, type TypeGuard } from '@accuser/mdast-util-type-guards';
import { slug } from 'github-slugger';
import type { Heading, List, Root } from 'mdast';
import { toString } from 'mdast-util-to-string';

type Depth = Heading['depth'];

export type Options = {
	minDepth?: Depth;
	maxDepth?: Depth;
	ordered?: boolean;
};

const headingsFrom = (root: Root, minDepth: Depth, maxDepth: Depth) => {
	const is = ((node) =>
		isHeading(node) && node.depth >= minDepth && node.depth <= maxDepth) as TypeGuard<Heading>;

	return collect(root, is);
};

export default ((root, { minDepth = 1, maxDepth = 6, ordered } = {}) =>
	headingsFrom(root, minDepth, maxDepth).reduce(
		(acc, { children }) => {
			const text = toString(children);
			const id = slug(text);

			acc.children.push({
				type: 'listItem',
				children: [
					{
						type: 'paragraph',
						children: [
							{
								type: 'link',
								children: [{ type: 'text', value: toString(children) }],
								url: `#${id}`
							}
						]
					}
				]
			});

			return acc;
		},
		{ type: 'list' as const, ordered, children: [] } as import('mdast').List
	)) satisfies (root: Root, options?: Options) => List;
