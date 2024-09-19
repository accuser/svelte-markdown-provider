import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Break, { type Props } from './Break.svelte';

describe('Break.svelte', async () => {
	const it = test.extend<{ props: Props }>({ props: { type: 'break' } });

	it('renders <br>', async ({ props }) => {
		const { container } = render(Break, { props });

		expect(container.querySelector('br')).toBeInTheDocument();
	});
});
