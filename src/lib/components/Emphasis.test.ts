import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Emphasis from './Emphasis.svelte';

describe('Emphasis.svelte', async () => {
	it('renders emphasis', async () => {
		const { container } = render(Emphasis, {
			props: {
				node: {
					type: 'emphasis',
					children: []
				}
			}
		});

		expect(container.innerHTML).toContain('<div><em><!--<Children>--></em><!--<Emphasis>--></div>');
	});
});
