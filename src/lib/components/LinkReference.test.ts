import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context.token.js';
import type { MarkdownContext } from '$lib/types/markdown-context.js';
import { render } from '@testing-library/svelte';
import { describe, expect, test, vi } from 'vitest';
import LinkReference, { type Props } from './LinkReference.svelte';

describe('LinkReference.svelte', async () => {
	const it = test.extend<{
		context: Map<symbol, Partial<MarkdownContext>>;
		props: Props;
	}>({
		context: new Map([
			[
				MARKDOWN_CONTEXT_TOKEN,
				{
					getDefinition: vi.fn(() => ({
						type: 'definition' as const,
						identifier: 'example',
						title: 'Example',
						url: 'https://example.com'
					}))
				}
			]
		]),
		props: {
			type: 'linkReference',
			identifier: 'example',
			referenceType: 'full',
			children: [{ type: 'text', value: 'Hello, World!' }]
		}
	});

	it('renders <a>', async ({ context, props }) => {
		const { container } = render(LinkReference, { context, props });

		expect(container.querySelector('a')).toBeInTheDocument();
	});

	it('renders <a> with `href` attibute', async ({ context, props }) => {
		const { container } = render(LinkReference, { context, props });

		expect(container.querySelector('a')).toHaveAttribute('href', 'https://example.com');
	});

	it('renders <a> with `title` attibute', async ({ context, props }) => {
		const { container } = render(LinkReference, { context, props });

		expect(container.querySelector('a')).toHaveAttribute('title', 'Example');
	});

	it('renders <a> with content', async ({ context, props }) => {
		const { container } = render(LinkReference, { context, props });

		expect(container.querySelector('a')).toHaveTextContent('Hello, World!');
	});
});
