import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Paragraph, {} from './Paragraph.svelte';
describe('Paragraph.svelte', async () => {
    const it = test.extend({
        props: {
            type: 'paragraph',
            children: [{ type: 'text', value: 'Hello, World!' }]
        }
    });
    it('renders <p>', async ({ props }) => {
        const { container } = render(Paragraph, { props });
        expect(container.querySelector('p')).toBeInTheDocument();
    });
    it('renders <p> with content', async ({ props }) => {
        const { container } = render(Paragraph, { props });
        expect(container.querySelector('p')).toHaveTextContent('Hello, World!');
    });
});
