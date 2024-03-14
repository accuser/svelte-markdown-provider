import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Strong from './Strong.svelte';

describe('Strong.svelte', async () => {
	it('renders <strong>', async () => {
		const { container } = render(Strong, {
			props: {
				node: {
					type: 'strong',
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><strong><!--<Markdown>--></strong><!--<Strong>--></div>'
		);
	});
});
