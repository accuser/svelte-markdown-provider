import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import TableRow from './TableRow.svelte';

describe('TableRow.svelte', async () => {
	const it = test.extend<{ props: ComponentProps<TableRow> }>({
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

	it('renders <tr>', async ({ props }) => {
		const { container } = render(TableRow, { props });

		expect(container.querySelector('tr')).toBeInTheDocument();
	});

	it('renders <tr> with content', async ({ props }) => {
		const { container } = render(TableRow, { props });

		expect(container.querySelector('tr')).toHaveTextContent('Hello, World!');
	});
});
