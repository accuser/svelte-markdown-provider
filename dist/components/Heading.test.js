import { render } from '@testing-library/svelte';
import { describe, expect, test, vi } from 'vitest';
import Heading, {} from './Heading.svelte';
vi.mock('$lib/contexts/markdown-context.js', async () => {
    const actual = await vi.importActual('$lib/contexts/markdown-context.js');
    return {
        ...actual,
        getMarkdownContext: vi.fn().mockReturnValue({
            slugify: vi.fn().mockReturnValue('helloworld')
        })
    };
});
describe('Heading.svelte', async () => {
    for (const depth of [1, 2, 3, 4, 5, 6]) {
        const it = test.extend({
            props: {
                children: [{ type: 'text', value: 'Hello, World!' }],
                depth,
                type: 'heading'
            }
        });
        it(`renders <h${depth}>`, async ({ props }) => {
            const { container } = render(Heading, { props });
            expect(container.querySelector(`h${depth}`)).toBeInTheDocument();
        });
        it(`renders <h${depth}> with \`id\` attibute`, async ({ props }) => {
            const { container } = render(Heading, { props });
            expect(container.querySelector(`h${depth}`)).toHaveAttribute('id', 'helloworld');
        });
        it(`renders <h${depth}> with content`, async ({ props }) => {
            const { container } = render(Heading, { props });
            expect(container.querySelector(`h${depth}`)).toHaveTextContent('Hello, World!');
        });
    }
});
