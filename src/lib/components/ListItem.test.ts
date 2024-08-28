import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ListItem from './ListItem.svelte';

describe('ListItem.svelte', async () => {
	it('renders <li>', async () => {
		const { container } = render(ListItem, {
			props: {
				node: {
					children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
					type: 'listItem'
				}
			}
		});

		expect(container.innerHTML).toContain('<li><p>Hello, World!</p></li>');
	});
});
