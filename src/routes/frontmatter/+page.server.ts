import { directiveFromMarkdown } from 'mdast-util-directive';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { directive } from 'micromark-extension-directive';
import { frontmatter } from 'micromark-extension-frontmatter';
import fs from 'node:fs';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	const src = fs.readFileSync('content/frontmatter.md').toString('utf-8');

	const ast = fromMarkdown(src, {
		extensions: [directive(), frontmatter()],
		mdastExtensions: [directiveFromMarkdown(), frontmatterFromMarkdown()]
	});

	return { ast };
}) satisfies PageServerLoad;
