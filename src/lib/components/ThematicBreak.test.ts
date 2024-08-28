import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ThematicBreak from './ThematicBreak.svelte';

describe('ThematicBreak.svelte', async () => {
	it('renders <hr>', async () => {
		const { container } = render(ThematicBreak, {
			props: {
				node: {
					type: 'thematicBreak'
				}
			}
		});

		expect(container.innerHTML).toContain('<hr>');
	});
});
