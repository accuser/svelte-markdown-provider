import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Text from './Text.svelte';

describe('Text.svelte', async () => {
	it('renders text', async () => {
		const { container } = render(Text, {
			props: {
				node: {
					type: 'text',
					value: 'Hello, World!'
				}
			}
		});

		expect(container.innerHTML).toContain('Hello, World!');
	});
});
