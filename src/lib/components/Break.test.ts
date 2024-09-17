import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Break from './Break.svelte';

describe('Break.svelte', async () => {
	it('renders <br>', async () => {
		const { container } = render(Break, {
			props: {
				type: 'break'
			}
		});

		expect(container.querySelector('br')).toBeInTheDocument();
	});
});
