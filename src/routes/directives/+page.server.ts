import { directiveFromMarkdown } from 'mdast-util-directive';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { directive } from 'micromark-extension-directive';
import fs from 'node:fs';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	const src = fs.readFileSync('content/directives.md').toString('utf-8');

	const ast = fromMarkdown(src, {
		extensions: [directive()],
		mdastExtensions: [directiveFromMarkdown()]
	});

	return { ast };
}) satisfies PageServerLoad;
