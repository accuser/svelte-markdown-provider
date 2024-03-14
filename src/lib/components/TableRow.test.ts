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
							children: []
						}
					]
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><tr><!--<Markdown>--><!--<Children>--></tr><!--<TableRow>--></div>'
		);
	});
});
