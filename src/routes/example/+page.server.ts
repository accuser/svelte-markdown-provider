import astFromString from '$lib/defaults/ast-from-string.js';
import { toString } from 'mdast-util-to-string';
import { toc } from 'mdast-util-toc';
import fs from 'node:fs';
import { find } from 'unist-util-find';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	const src = fs.readFileSync('content/example.md').toString('utf-8');

	const ast = astFromString(src);

	return {
		ast,
		title: toString(find<import('mdast').Heading>(ast, { type: 'heading', depth: 1 })?.children[0]),
		toc: {
			type: 'root',
			children: [toc(ast, { minDepth: 2, maxDepth: 2 }).map]
		} as import('mdast').Root
	};
}) satisfies PageServerLoad;
