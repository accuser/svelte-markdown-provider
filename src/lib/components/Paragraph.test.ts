import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Paragraph from './Paragraph.svelte';

describe('Paragraph.svelte', async () => {
	it('renders <p>', async () => {
		const { container } = render(Paragraph, {
			props: {
				node: { type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }
			}
		});

		expect(container.innerHTML).toContain('<p>Hello, World!</p>');
	});
});
