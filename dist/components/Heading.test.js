import MARKDOWN_CONTEXT_TOKEN from '../tokens/markdown-context.token.js';
import { render } from '@testing-library/svelte';
import { describe, expect, test, vi } from 'vitest';
import Heading, {} from './Heading.svelte';
describe('Heading.svelte', async () => {
    for (const depth of [1, 2, 3, 4, 5, 6]) {
        const it = test.extend({
            context: new Map([
                [
                    MARKDOWN_CONTEXT_TOKEN,
                    { slugify: vi.fn((value) => value.toLowerCase().replace(/[^\w]+/g, '')) }
                ]
            ]),
            props: {
                children: [{ type: 'text', value: 'Hello, World!' }],
                depth,
                type: 'heading'
            }
        });
        it(`renders <h${depth}>`, async ({ context, props }) => {
            const { container } = render(Heading, { context, props });
            expect(container.querySelector(`h${depth}`)).toBeInTheDocument();
        });
        it(`renders <h${depth}> with \`id\` attibute`, async ({ context, props }) => {
            const { container } = render(Heading, { context, props });
            expect(container.querySelector(`h${depth}`)).toHaveAttribute('id', 'helloworld');
        });
        it(`renders <h${depth}> with content`, async ({ context, props }) => {
            const { container } = render(Heading, { context, props });
            expect(container.querySelector(`h${depth}`)).toHaveTextContent('Hello, World!');
        });
    }
});
