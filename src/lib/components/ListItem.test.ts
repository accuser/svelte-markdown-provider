import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ListItem from './ListItem.svelte';

describe('ListItem.svelte', async () => {
	it('renders <li>', async () => {
		const { container } = render(ListItem, {
			props: {
				children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
				type: 'listItem'
			}
		});

		expect(container.querySelector('li')).toBeInTheDocument();
	});

	it('renders <li> with content', async () => {
		const { container } = render(ListItem, {
			props: {
				children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
				type: 'listItem'
			}
		});

		expect(container.querySelector('li')).toHaveTextContent('Hello, World!');
	});
});
