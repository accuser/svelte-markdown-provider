import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context.token.js';
import type { MarkdownContext } from '$lib/types/markdown-context.js';
import { render } from '@testing-library/svelte';
import { describe, expect, test, vi } from 'vitest';
import ImageReference, { type Props } from './ImageReference.svelte';

describe('ImageReference.svelte', async () => {
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
						url: 'https://example.com/image.jpg'
					}))
				}
			]
		]),
		props: {
			type: 'imageReference',
			alt: 'Example',
			identifier: 'example',
			referenceType: 'full'
		}
	});

	it('renders <img>', async ({ context, props }) => {
		const { container } = render(ImageReference, { context, props });

		expect(container.querySelector('img')).toBeInTheDocument();
	});

	it('renders <img> with `src` attribute', async ({ context, props }) => {
		const { container } = render(ImageReference, { context, props });

		expect(container.querySelector('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
	});

	it('renders <img> with `alt` attribute', async ({ context, props }) => {
		const { container } = render(ImageReference, { context, props });

		expect(container.querySelector('img')).toHaveAttribute('alt', 'Example');
	});
});
