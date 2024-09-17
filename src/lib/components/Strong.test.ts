import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Strong from './Strong.svelte';

describe('Strong.svelte', async () => {
	it('renders <strong>', async () => {
		const { container } = render(Strong, {
			props: {
				children: [{ type: 'text', value: 'Hello, World!' }],
				type: 'strong'
			}
		});

		expect(container.querySelector('strong')).toBeInTheDocument();
	});

	it('renders <strong> with content', async () => {
		const { container } = render(Strong, {
			props: {
				children: [{ type: 'text', value: 'Hello, World!' }],
				type: 'strong'
			}
		});

		expect(container.querySelector('strong')).toHaveTextContent('Hello, World!');
	});
});
