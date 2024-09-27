import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test, vi } from 'vitest';
import ImageReference from './ImageReference.svelte';

vi.mock('$lib/contexts/markdown-context.js', async () => {
	const actual = await vi.importActual('$lib/contexts/markdown-context.js');

	return {
		...actual,
		getMarkdownContext: vi.fn().mockReturnValue({
			getDefinition: vi.fn().mockReturnValue({
				title: 'Example',
				url: 'https://example.com/image.jpg'
			})
		})
	};
});

describe('ImageReference.svelte', async () => {
	const it = test.extend<{ props: ComponentProps<ImageReference> }>({
		props: {
			type: 'imageReference',
			alt: 'Example',
			identifier: 'example',
			referenceType: 'full'
		}
	});

	it('renders <img>', async ({ props }) => {
		const { container } = render(ImageReference, { props });

		expect(container.querySelector('img')).toBeInTheDocument();
	});

	it('renders <img> with `src` attribute', async ({ props }) => {
		const { container } = render(ImageReference, { props });

		expect(container.querySelector('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
	});

	it('renders <img> with `alt` attribute', async ({ props }) => {
		const { container } = render(ImageReference, { props });

		expect(container.querySelector('img')).toHaveAttribute('alt', 'Example');
	});
});
