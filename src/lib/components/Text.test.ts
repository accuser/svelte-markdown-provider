import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Text from './Text.svelte';

describe('Text.svelte', async () => {
	it('renders text', async () => {
		const { container } = render(Text, {
			props: {
				type: 'text',
				value: 'Hello, World!'
			}
		});

		expect(container).toHaveTextContent('Hello, World!');
	});
});
