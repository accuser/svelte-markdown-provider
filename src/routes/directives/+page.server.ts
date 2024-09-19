import fs from 'node:fs';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	const src = fs.readFileSync('content/directives.md').toString('utf-8');

	return { src };
}) satisfies PageServerLoad;
