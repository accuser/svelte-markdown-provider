import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Definition, { type Props } from './Definition.svelte';

describe('Definition.svelte', async () => {
	const it = test.extend<{ props: Props }>({
		props: {
			type: 'definition',
			identifier: 'example',
			url: 'https://example.com'
		}
	});

	it('renders nothing', async ({ props }) => {
		const { container } = render(Definition, { props });

		expect(container).toHaveTextContent('');
	});
});
