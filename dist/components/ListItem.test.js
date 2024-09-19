import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import ListItem, {} from './ListItem.svelte';
describe('ListItem.svelte', async () => {
    const it = test.extend({
        props: {
            children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
            type: 'listItem'
        }
    });
    it('renders <li>', async ({ props }) => {
        const { container } = render(ListItem, { props });
        expect(container.querySelector('li')).toBeInTheDocument();
    });
    it('renders <li> with content', async ({ props }) => {
        const { container } = render(ListItem, { props });
        expect(container.querySelector('li')).toHaveTextContent('Hello, World!');
    });
});
