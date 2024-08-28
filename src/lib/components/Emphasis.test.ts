import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Emphasis from './Emphasis.svelte';

describe('Emphasis.svelte', async () => {
	it('renders emphasis', async () => {
		const { container } = render(Emphasis, {
			props: {
				node: {
					children: [{ type: 'text', value: 'Hello, World!' }],
					type: 'emphasis'
				}
			}
		});

		expect(container.innerHTML).toContain('<em>Hello, World!</em>');
	});
});
