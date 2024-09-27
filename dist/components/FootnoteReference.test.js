import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import FootnoteReference from './FootnoteReference.svelte';
describe('FootnoteReference.svelte', () => {
    const it = test.extend({
        props: {
            type: 'footnoteReference',
            label: 'Example',
            identifier: 'example'
        }
    });
    it('renders <sup>', ({ props }) => {
        const { container } = render(FootnoteReference, { props });
        expect(container.querySelector('sup')).toBeInTheDocument();
    });
    it('renders <a> in <sup>', ({ props }) => {
        const { container } = render(FootnoteReference, { props });
        expect(container.querySelector('sup > a')).toBeInTheDocument();
    });
    it('renders <a> in <sup> with `id` attribute', ({ props }) => {
        const { container } = render(FootnoteReference, { props });
        expect(container.querySelector('sup > a')).toHaveAttribute('id', 'footnote-ref-example');
    });
    it('renders <a> in <sup> with `href` attribute', ({ props }) => {
        const { container } = render(FootnoteReference, { props });
        expect(container.querySelector('sup > a')).toHaveAttribute('href', '#footnote-example');
    });
    it('renders <a> in <sup> with `aria-describedby', ({ props }) => {
        const { container } = render(FootnoteReference, { props });
        expect(container.querySelector('sup > a')).toHaveAttribute('aria-describedby', 'footnote-label');
    });
    it('renders <a> in <sup> with content', ({ props }) => {
        const { container } = render(FootnoteReference, { props });
        expect(container.querySelector('sup > a')).toHaveTextContent('Example');
    });
});
