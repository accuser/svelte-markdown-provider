import { render } from '@testing-library/svelte/svelte5';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Blockquote from './Blockquote.svelte';

describe('BlockQuote.svelte', () => {
	const it = test.extend<{ props: ComponentProps<Blockquote> }>({
		props: {
			children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
			type: 'blockquote'
		}
	});

	it('renders <blockquote>', ({ props }) => {
		const { container } = render(Blockquote, { props });

		expect(container.querySelector('blockquote')).toBeInTheDocument();
	});

	it('renders <blockquote> with content', ({ props }) => {
		const { container } = render(Blockquote, { props });

		expect(container.querySelector('blockquote')).toHaveTextContent('Hello, World!');
	});
});
