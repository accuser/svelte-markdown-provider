import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Strong from './Strong.svelte';

describe('Strong.svelte', () => {
	const it = test.extend<{ props: ComponentProps<Strong> }>({
		props: {
			children: [{ type: 'text', value: 'Hello, World!' }],
			type: 'strong'
		}
	});

	it('renders <strong>', ({ props }) => {
		const { container } = render(Strong, { props });

		expect(container.querySelector('strong')).toBeInTheDocument();
	});

	it('renders <strong> with content', ({ props }) => {
		const { container } = render(Strong, { props });

		expect(container.querySelector('strong')).toHaveTextContent('Hello, World!');
	});
});
