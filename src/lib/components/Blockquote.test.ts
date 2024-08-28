import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Blockquote from './Blockquote.svelte';

describe('BlockQuote.svelte', async () => {
	it('renders <blockquote>', async () => {
		const { container } = render(Blockquote, {
			props: {
				node: {
					children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
					type: 'blockquote'
				}
			}
		});

		expect(container.innerHTML).toContain('<blockquote><p>Hello, World!</p></blockquote>');
	});
});
