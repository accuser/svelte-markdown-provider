import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Definition from './Definition.svelte';

describe('Definition.svelte', () => {
	const it = test.extend<{ props: ComponentProps<Definition> }>({
		props: {
			type: 'definition',
			identifier: 'example',
			url: 'https://example.com'
		}
	});

	it('renders nothing', ({ props }) => {
		const { container } = render(Definition, { props });

		expect(container).toHaveTextContent('');
	});
});
