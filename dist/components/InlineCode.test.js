import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import InlineCode, {} from './InlineCode.svelte';
describe('InlineCode.svelte', async () => {
    const it = test.extend({
        props: {
            type: 'inlineCode',
            value: 'console.log("Hello, World!");'
        }
    });
    it('renders <code>', async ({ props }) => {
        const { container } = render(InlineCode, { props });
        expect(container.querySelector('code')).toBeInTheDocument();
    });
    it('renders <code> with content', async ({ props }) => {
        const { container } = render(InlineCode, { props });
        expect(container.querySelector('code')).toHaveTextContent('console.log("Hello, World!");');
    });
});
