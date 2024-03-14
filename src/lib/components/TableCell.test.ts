import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TableCell from './TableCell.svelte';

describe('TableCell.svelte', async () => {
	it('renders <td>', async () => {
		const { container } = render(TableCell, {
			props: {
				node: {
					children: [],
					type: 'tableCell'
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><td><!--<Children>--></td><!--<TableCell>--></div>'
		);
	});
});
