import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Emphasis from './Emphasis.svelte';

describe('Emphasis.svelte', () => {
	const it = test.extend<{ props: ComponentProps<Emphasis> }>({
		props: {
			children: [{ type: 'text', value: 'Hello, World!' }],
			type: 'emphasis'
		}
	});

	it('renders <em>', ({ props }) => {
		const { container } = render(Emphasis, { props });

		expect(container.querySelector('em')).toBeInTheDocument();
	});

	it('renders <em> with content', ({ props }) => {
		const { container } = render(Emphasis, { props });

		expect(container.querySelector('em')).toHaveTextContent('Hello, World!');
	});
});
