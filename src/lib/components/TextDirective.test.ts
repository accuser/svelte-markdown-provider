import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import TextDirective from './TextDirective.svelte';

describe('TextDirective.svelte', () => {
	const it = test.extend<{ props: ComponentProps<TextDirective> }>({
		props: {
			name: 'text',
			type: 'textDirective',
			children: [{ type: 'text', value: 'Hello, World!' }]
		}
	});

	it('renders an HTML comment', ({ props }) => {
		const { container } = render(TextDirective, { props });

		expect(container.outerHTML).toContain('<!-- Unrecognized text directive :text -->');
	});

	it('renders <span> with `class` attribute', ({ props }) => {
		const { container } = render(TextDirective, { props });

		expect(container.querySelector('span.text')).toBeInTheDocument();
	});

	it('renders <span> with content', ({ props }) => {
		const { container } = render(TextDirective, { props });

		expect(container.querySelector('span.text')).toHaveTextContent('Hello, World!');
	});
});
