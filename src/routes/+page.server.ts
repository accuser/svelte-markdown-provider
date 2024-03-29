import fs from 'node:fs';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	const root = JSON.parse(fs.readFileSync('content/example.json').toString('utf-8'));

	return { root };
}) satisfies PageServerLoad;
