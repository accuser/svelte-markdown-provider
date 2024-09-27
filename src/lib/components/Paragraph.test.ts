import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Paragraph from './Paragraph.svelte';

describe('Paragraph.svelte', () => {
	const it = test.extend<{ props: ComponentProps<Paragraph> }>({
		props: {
			type: 'paragraph',
			children: [{ type: 'text', value: 'Hello, World!' }]
		}
	});

	it('renders <p>', ({ props }) => {
		const { container } = render(Paragraph, { props });

		expect(container.querySelector('p')).toBeInTheDocument();
	});

	it('renders <p> with content', ({ props }) => {
		const { container } = render(Paragraph, { props });

		expect(container.querySelector('p')).toHaveTextContent('Hello, World!');
	});
});
