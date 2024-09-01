import fs from 'node:fs';
import type { PageServerLoad } from './$types.js';

// Whislt Markdown can include inline HTML, it is not recommended to use with
// Svelte. However, if you do need to include inline HTML it is recommended
// that client-side rendering is disabled.
export const csr = false;

export const load = (async () => {
	const src = fs.readFileSync('content/html.md').toString('utf-8');

	return { src };
}) satisfies PageServerLoad;
