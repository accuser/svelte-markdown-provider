import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Table from './Table.svelte';

describe('Table.svelte', async () => {
	it('renders <table>', async () => {
		const { container } = render(Table, {
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

		expect(container.querySelector('table')).toBeInTheDocument();
	});

	it('renders <table> with content', async () => {
		const { container } = render(Table, {
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

		expect(container.querySelector('table')).toHaveTextContent('Hello, World!');
	});
});
