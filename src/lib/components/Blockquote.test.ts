import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Blockquote, { type Props } from './Blockquote.svelte';

describe('BlockQuote.svelte', async () => {
	const it = test.extend<{ props: Props }>({
		props: {
			children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
			type: 'blockquote'
		}
	});

	it('renders <blockquote>', async ({ props }) => {
		const { container } = render(Blockquote, { props });

		expect(container.querySelector('blockquote')).toBeInTheDocument();
	});

	it('renders <blockquote> with content', async ({ props }) => {
		const { container } = render(Blockquote, { props });

		expect(container.querySelector('blockquote')).toHaveTextContent('Hello, World!');
	});
});
