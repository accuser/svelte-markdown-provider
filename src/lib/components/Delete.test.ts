import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Delete, { type Props } from './Delete.svelte';

describe('Delete.svelte', async () => {
	const it = test.extend<{ props: Props }>({
		props: {
			children: [{ type: 'text', value: 'Hello, World!' }],
			type: 'delete'
		}
	});

	it('renders <del>', async ({ props }) => {
		const { container } = render(Delete, { props });

		expect(container.querySelector('del')).toBeInTheDocument();
	});

	it('renders <del> with content', async ({ props }) => {
		const { container } = render(Delete, { props });

		expect(container.querySelector('del')).toHaveTextContent('Hello, World!');
	});
});
