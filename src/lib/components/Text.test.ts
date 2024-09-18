import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Text from './Text.svelte';

describe('Text.svelte', async () => {
	const it = test.extend<{ props: import('mdast').Text }>({
		props: {
			type: 'text',
			value: 'Hello, World!'
		}
	});

	it('renders text', async ({ props }) => {
		const { container } = render(Text, { props });

		expect(container).toHaveTextContent('Hello, World!');
	});
});
