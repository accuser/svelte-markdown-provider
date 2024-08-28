import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Table from './Table.svelte';

describe('Table.svelte', async () => {
	it('renders <table>', async () => {
		const { container } = render(Table, {
			props: {
				node: {
					type: 'table',
					children: [
						{
							type: 'tableRow',
							children: [
								{ type: 'tableCell', children: [{ type: 'text', value: 'Heading' }] },
								{ type: 'tableCell', children: [{ type: 'text', value: 'Value' }] }
							]
						}
					]
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<table><thead><tr><td>Heading</td><td>Value</td></tr><!----></thead><!----><!----></table>'
		);
	});
});
