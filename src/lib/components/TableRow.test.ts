import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TableRow from './TableRow.svelte';

describe('TableRow.svelte', async () => {
	it('renders <tr>', async () => {
		const { container } = render(TableRow, {
			props: {
				node: {
					type: 'tableRow',
					children: [
						{
							type: 'tableCell',
							children: [{ type: 'text', value: 'Hello, World!' }]
						}
					]
				}
			}
		});

		expect(container.innerHTML).toContain('<tr><td>Hello, World!</td></tr>');
	});
});
