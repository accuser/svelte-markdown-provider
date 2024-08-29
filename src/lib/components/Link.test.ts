import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Link from './Link.svelte';

describe('Link.svelte', async () => {
    it('renders <a>', async () => {
        const { container } = render(Link, {
            props: {
                node: {
                    children: [{ type: 'text', value: 'Hello, World!' }],
                    type: 'link',
                    url: 'https://example.com'
                }
            }
        });

        expect(container.querySelector('a')).toBeInTheDocument();
    })

    it('renders <a> with `href` attibute', async () => {
        const { container } = render(Link, {
            props: {
                node: {
                    children: [{ type: 'text', value: 'Hello, World!' }],
                    type: 'link',
                    url: 'https://example.com'
                }
            }
        });

        expect(container.querySelector('a')).toHaveAttribute('href', 'https://example.com');
    })

    it('renders <a> with content', async () => {
        const { container } = render(Link, {
            props: {
                node: {
                    children: [{ type: 'text', value: 'Hello, World!' }],
                    type: 'link',
                    url: 'https://example.com'
                }
            }
        });

        expect(container.querySelector('a')).toHaveTextContent('Hello, World!');
    })
});
