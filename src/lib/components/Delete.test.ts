import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Delete from './Delete.svelte';

describe('Delete.svelte', async () => {
	it('renders <delete>', async () => {
		const { container } = render(Delete, {
			props: {
				node: {
					type: 'delete',
					children: []
				}
			}
		});

		expect(container.innerHTML).toContain('<div><del><!--<Children>--></del><!--<Delete>--></div>');
	});
});
