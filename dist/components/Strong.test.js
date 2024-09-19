import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Strong, {} from './Strong.svelte';
describe('Strong.svelte', async () => {
    const it = test.extend({
        props: {
            children: [{ type: 'text', value: 'Hello, World!' }],
            type: 'strong'
        }
    });
    it('renders <strong>', async ({ props }) => {
        const { container } = render(Strong, { props });
        expect(container.querySelector('strong')).toBeInTheDocument();
    });
    it('renders <strong> with content', async ({ props }) => {
        const { container } = render(Strong, { props });
        expect(container.querySelector('strong')).toHaveTextContent('Hello, World!');
    });
});
