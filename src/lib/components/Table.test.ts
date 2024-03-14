import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Table from './Table.svelte';

describe('Table.svelte', async () => {
	it('renders <table>', async () => {
		const { container } = render(Table, {
			props: {
				node: {
					type: 'table',
					children: []
				}
			}
		});

		expect(container.innerHTML).toContain('<div><table> </table><!--<Table>--></div>');
	});
});
