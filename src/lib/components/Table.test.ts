import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Table from './Table.svelte';

describe('Table.svelte', async () => {
	const it = test.extend<{ props: import('mdast').Table }>({
		props: {
			type: 'table',
			children: [
				{
					type: 'tableRow',
					children: [{ type: 'tableCell', children: [{ type: 'text', value: 'Hello, World!' }] }]
				}
			]
		}
	});

	it('renders <table>', async ({ props }) => {
		const { container } = render(Table, { props });

		expect(container.querySelector('table')).toBeInTheDocument();
	});

	it('renders <table> with content', async ({ props }) => {
		const { container } = render(Table, { props });

		expect(container.querySelector('table')).toHaveTextContent('Hello, World!');
	});
});
