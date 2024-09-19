import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import ThematicBreak, { type Props } from './ThematicBreak.svelte';

describe('ThematicBreak.svelte', async () => {
	const it = test.extend<{ props: Props }>({
		props: {
			type: 'thematicBreak'
		}
	});

	it('renders <hr>', async ({ props }) => {
		const { container } = render(ThematicBreak, { props });

		expect(container.querySelector('hr')).toBeInTheDocument();
	});
});
