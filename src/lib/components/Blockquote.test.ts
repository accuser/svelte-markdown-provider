import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Blockquote from './Blockquote.svelte';

describe('BlockQuote.svelte', async () => {
	const it = test.extend<{ props: import('mdast').Blockquote }>({
		props: {
			children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
			type: 'blockquote'
		}
	});

	it('renders <blockquote>', async ({ props }) => {
		const { container } = render(Blockquote, { props });

		expect(container.querySelector('blockquote')).toBeInTheDocument();
	});

	it('renders children', async ({ props }) => {
		const { container } = render(Blockquote, { props });

		expect(container.querySelectorAll('blockquote > p')).toHaveLength(1);
	});
});
