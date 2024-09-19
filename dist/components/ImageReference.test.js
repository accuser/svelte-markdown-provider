import MARKDOWN_CONTEXT_TOKEN from '../tokens/markdown-context.token.js';
import { render } from '@testing-library/svelte';
import { describe, expect, test, vi } from 'vitest';
import ImageReference, {} from './ImageReference.svelte';
describe('ImageReference.svelte', async () => {
    const it = test.extend({
        context: new Map([
            [
                MARKDOWN_CONTEXT_TOKEN,
                {
                    getDefinition: vi.fn(() => ({
                        type: 'definition',
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
