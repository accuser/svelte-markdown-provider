import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Blockquote from './Blockquote.svelte';

describe('BlockQuote.svelte', async () => {
	it('renders <blockquote>', async () => {
		const { container } = render(Blockquote, {
			props: {
				node: {
					type: 'blockquote',
					children: []
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><blockquote></blockquote><!--<Blockquote>--></div>'
		);
	});
});
