import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Html from './Html.svelte';

describe('Html.svelte', async () => {
	it('renders html', async () => {
		const { container } = render(Html, {
			props: {
				node: {
					type: 'html',
					value: '<pre>Hello, World!</pre>'
				}
			}
		});

		expect(container.innerHTML).toContain('<pre>Hello, World!</pre>');
	});
});
