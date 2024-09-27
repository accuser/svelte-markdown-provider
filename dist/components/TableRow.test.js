import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import TableRow from './TableRow.svelte';
describe('TableRow.svelte', () => {
    const it = test.extend({
        props: {
            type: 'tableRow',
            children: [
                {
                    type: 'tableCell',
                    children: [{ type: 'text', value: 'Hello, World!' }]
                }
            ]
        }
    });
    it('renders <tr>', ({ props }) => {
        const { container } = render(TableRow, { props });
        expect(container.querySelector('tr')).toBeInTheDocument();
    });
    it('renders <tr> with content', ({ props }) => {
        const { container } = render(TableRow, { props });
        expect(container.querySelector('tr')).toHaveTextContent('Hello, World!');
    });
});
