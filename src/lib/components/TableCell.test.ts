import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TableCell from './TableCell.svelte';

describe('TableCell.svelte', async () => {
	it('renders <td>', async () => {
		const { container } = render(TableCell, {
			props: {
				node: {
					children: [{ type: 'text', value: 'Hello, World!' }],
					type: 'tableCell'
				}
			}
		});

		expect(container.querySelector('td')).toBeInTheDocument();
	});

	it('renders <td> with content', async () => {
		const { container } = render(TableCell, {
			props: {
				node: {
					children: [{ type: 'text', value: 'Hello, World!' }],
					type: 'tableCell'
				}
			}
		});

		expect(container.querySelector('td')).toHaveTextContent('Hello, World!');
	});
});
