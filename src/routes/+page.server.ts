import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	const res = await fetch(
		'https://raw.githubusercontent.com/accuser/svelte-markdown-provider/main/content/README.md'
	);

	if (res.ok) {
		const src = await res.text();

		return { src };
	}

	error(res.status, res.statusText);
}) satisfies PageServerLoad;
