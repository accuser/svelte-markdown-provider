import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Blockquote from './Blockquote.svelte';

describe('BlockQuote.svelte', async () => {
    it('renders <blockquote>', async () => {
        const { container } = render(Blockquote, {
            props: {
                node: {
                    children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
                    type: 'blockquote'
                }
            }
        });

        expect(container.querySelector('blockquote')).toBeInTheDocument();
    });

    it('renders children', async () => {
        const { container } = render(Blockquote, {
            props: {
                node: {
                    children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
                    type: 'blockquote'
                }
            }
        });

        expect(container.querySelectorAll('blockquote > p')).toHaveLength(1)
    });
});
