import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Link from './Link.svelte';

describe('Link.svelte', async () => {
	it('renders <a>', async () => {
		const { container } = render(Link, {
			props: {
				node: {
					children: [{ type: 'text', value: 'Hello, World!' }],
					type: 'link',
					url: 'https://example.com'
				}
			}
		});

		expect(container.innerHTML).toContain('<a href="https://example.com">Hello, World!</a>');
	});
});
