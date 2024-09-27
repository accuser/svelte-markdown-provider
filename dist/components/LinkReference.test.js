import { render } from '@testing-library/svelte';
import { describe, expect, test, vi } from 'vitest';
import LinkReference from './LinkReference.svelte';
vi.mock('$lib/contexts/markdown-context.js', async () => {
    const actual = await vi.importActual('$lib/contexts/markdown-context.js');
    return {
        ...actual,
        getMarkdownContext: vi.fn().mockReturnValue({
            getDefinition: vi.fn().mockReturnValue({
                title: 'Example',
                url: 'https://example.com'
            })
        })
    };
});
describe('LinkReference.svelte', () => {
    const it = test.extend({
        props: {
            type: 'linkReference',
            identifier: 'example',
            referenceType: 'full',
            children: [{ type: 'text', value: 'Hello, World!' }]
        }
    });
    it('renders <a>', ({ props }) => {
        const { container } = render(LinkReference, { props });
        expect(container.querySelector('a')).toBeInTheDocument();
    });
    it('renders <a> with `href` attibute', ({ props }) => {
        const { container } = render(LinkReference, { props });
        expect(container.querySelector('a')).toHaveAttribute('href', 'https://example.com');
    });
    it('renders <a> with `title` attibute', ({ props }) => {
        const { container } = render(LinkReference, { props });
        expect(container.querySelector('a')).toHaveAttribute('title', 'Example');
    });
    it('renders <a> with content', ({ props }) => {
        const { container } = render(LinkReference, { props });
        expect(container.querySelector('a')).toHaveTextContent('Hello, World!');
    });
});
