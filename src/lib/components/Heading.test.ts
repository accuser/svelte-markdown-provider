import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Heading from './Heading.svelte';

describe('Heading.svelte', async () => {
    for (const depth of [1, 2, 3, 4, 5, 6] as import("mdast").Heading['depth'][]) {
        it(`renders <h${depth}>`, async () => {
            const { container } = render(Heading, {
                props: {
                    node: {
                        type: 'heading',
                        depth,
                        children: [{ type: 'text', value: 'Hello, World!' }]
                    }
                }
            });

            expect(container.querySelector(`h${depth}`)).toBeInTheDocument();
        });

        it(`renders <h${depth}> with \`id\` attibute`, async () => {
            const { container } = render(Heading, {
                props: {
                    node: {
                        type: 'heading',
                        depth,
                        children: [{ type: 'text', value: 'Hello, World!' }]
                    }
                }
            });

            expect(container.querySelector(`h${depth}`)).toHaveAttribute('id', 'hello-world');
        });

        it(`renders <h${depth}> with content`, async () => {
            const { container } = render(Heading, {
                props: {
                    node: {
                        type: 'heading',
                        depth,
                        children: [{ type: 'text', value: 'Hello, World!' }]
                    }
                }
            });

            expect(container.querySelector(`h${depth}`)).toHaveTextContent('Hello, World!');
        });
    }
})
