import fromMarkdown from '$lib/from-markdown.js';
import fs from 'node:fs';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	const root = fromMarkdown(fs.readFileSync('content/example.md'));

	console.log('root', JSON.stringify(root, null, 2));
	return { root };
}) satisfies PageServerLoad;
