import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import TableCell from './TableCell.svelte';
describe('TableCell.svelte', () => {
    const it = test.extend({
        props: {
            children: [{ type: 'text', value: 'Hello, World!' }],
            type: 'tableCell'
        }
    });
    it('renders <td>', ({ props }) => {
        const { container } = render(TableCell, { props });
        expect(container.querySelector('td')).toBeInTheDocument();
    });
    it('renders <td> with content', ({ props }) => {
        const { container } = render(TableCell, { props });
        expect(container.querySelector('td')).toHaveTextContent('Hello, World!');
    });
});
