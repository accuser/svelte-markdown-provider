import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import ListItem from './ListItem.svelte';

describe('ListItem.svelte', () => {
	const it = test.extend<{ props: ComponentProps<ListItem> }>({
		props: {
			children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
			type: 'listItem'
		}
	});

	it('renders <li>', ({ props }) => {
		const { container } = render(ListItem, { props });

		expect(container.querySelector('li')).toBeInTheDocument();
	});

	it('renders <li> with content', ({ props }) => {
		const { container } = render(ListItem, { props });

		expect(container.querySelector('li')).toHaveTextContent('Hello, World!');
	});
});
