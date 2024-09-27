import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Image from './Image.svelte';
describe('Image.svelte', () => {
    const it = test.extend({
        props: {
            type: 'image',
            url: 'https://example.com/image.jpg',
            alt: 'Example'
        }
    });
    it('renders <img>', ({ props }) => {
        const { container } = render(Image, { props });
        expect(container.querySelector('img')).toBeInTheDocument();
    });
    it('renders <img> with `src` attribute', ({ props }) => {
        const { container } = render(Image, { props });
        expect(container.querySelector('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
    });
    it('renders <img> with `alt` attribute', ({ props }) => {
        const { container } = render(Image, { props });
        expect(container.querySelector('img')).toHaveAttribute('alt', 'Example');
    });
});
