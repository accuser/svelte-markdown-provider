import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Emphasis, { type Props } from './Emphasis.svelte';

describe('Emphasis.svelte', async () => {
	const it = test.extend<{ props: Props }>({
		props: {
			children: [{ type: 'text', value: 'Hello, World!' }],
			type: 'emphasis'
		}
	});

	it('renders <em>', async ({ props }) => {
		const { container } = render(Emphasis, { props });

		expect(container.querySelector('em')).toBeInTheDocument();
	});

	it('renders <em> with content', async ({ props }) => {
		const { container } = render(Emphasis, { props });

		expect(container.querySelector('em')).toHaveTextContent('Hello, World!');
	});
});
