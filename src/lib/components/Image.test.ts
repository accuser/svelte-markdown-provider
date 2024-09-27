import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Image from './Image.svelte';

describe('Image.svelte', async () => {
	const it = test.extend<{ props: ComponentProps<Image> }>({
		props: {
			type: 'image',
			url: 'https://example.com/image.jpg',
			alt: 'Example'
		}
	});

	it('renders <img>', async ({ props }) => {
		const { container } = render(Image, { props });

		expect(container.querySelector('img')).toBeInTheDocument();
	});

	it('renders <img> with `src` attribute', async ({ props }) => {
		const { container } = render(Image, { props });

		expect(container.querySelector('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
	});

	it('renders <img> with `alt` attribute', async ({ props }) => {
		const { container } = render(Image, { props });

		expect(container.querySelector('img')).toHaveAttribute('alt', 'Example');
	});
});
