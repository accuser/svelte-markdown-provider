import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ListItem from './ListItem.svelte';

describe('ListItem.svelte', async () => {
	it('renders <li>', async () => {
		const { container } = render(ListItem, {
			props: {
				node: {
					children: [],
					type: 'listItem'
				}
			}
		});

		expect(container.innerHTML).toContain('<div><li></li><!--<ListItem>--></div>');
	});
});
