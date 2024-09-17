import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Delete from './Delete.svelte';

describe('Delete.svelte', async () => {
	it('renders <del>', async () => {
		const { container } = render(Delete, {
			props: {
				children: [{ type: 'text', value: 'Hello, World!' }],
				type: 'delete'
			}
		});

		expect(container.querySelector('del')).toBeInTheDocument();
	});

	it('renders <del> with content', async () => {
		const { container } = render(Delete, {
			props: {
				children: [{ type: 'text', value: 'Hello, World!' }],
				type: 'delete'
			}
		});

		expect(container.querySelector('del')).toHaveTextContent('Hello, World!');
	});
});
