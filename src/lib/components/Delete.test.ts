import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Delete from './Delete.svelte';

describe('Delete.svelte', () => {
	const it = test.extend<{ props: ComponentProps<Delete> }>({
		props: {
			children: [{ type: 'text', value: 'Hello, World!' }],
			type: 'delete'
		}
	});

	it('renders <del>', ({ props }) => {
		const { container } = render(Delete, { props });

		expect(container.querySelector('del')).toBeInTheDocument();
	});

	it('renders <del> with content', ({ props }) => {
		const { container } = render(Delete, { props });

		expect(container.querySelector('del')).toHaveTextContent('Hello, World!');
	});
});
