import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import TextDirective, {} from './TextDirective.svelte';
describe('TextDirective.svelte', async () => {
    const it = test.extend({
        props: {
            name: 'text',
            type: 'textDirective',
            children: [{ type: 'text', value: 'Hello, World!' }]
        }
    });
    it('renders an HTML comment', async ({ props }) => {
        const { container } = render(TextDirective, { props });
        expect(container.outerHTML).toContain('<!-- Unrecognized text directive :text -->');
    });
    it('renders <span> with `class` attribute', async ({ props }) => {
        const { container } = render(TextDirective, { props });
        expect(container.querySelector('span.text')).toBeInTheDocument();
    });
    it('renders <span> with content', async ({ props }) => {
        const { container } = render(TextDirective, { props });
        expect(container.querySelector('span.text')).toHaveTextContent('Hello, World!');
    });
});
