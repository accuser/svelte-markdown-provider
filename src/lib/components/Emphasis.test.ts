import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Emphasis from './Emphasis.svelte';

describe('Emphasis.svelte', async () => {
	it('renders <em>', async () => {
		const { container } = render(Emphasis, {
			props: {
				children: [{ type: 'text', value: 'Hello, World!' }],
				type: 'emphasis'
			}
		});

		expect(container.querySelector('em')).toBeInTheDocument();
	});

	it('renders <em> with content', async () => {
		const { container } = render(Emphasis, {
			props: {
				children: [{ type: 'text', value: 'Hello, World!' }],
				type: 'emphasis'
			}
		});

		expect(container.querySelector('em')).toHaveTextContent('Hello, World!');
	});
});
