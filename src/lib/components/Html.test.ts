import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Html, { type Props } from './Html.svelte';

describe('Html.svelte', async () => {
	const it = test.extend<{ props: Props }>({
		props: {
			type: 'html',
			value: '<pre>Hello, World!</pre>'
		}
	});

	it('renders html', async ({ props }) => {
		const { container } = render(Html, { props });

		expect(container.querySelector('pre')).toBeInTheDocument();
	});
});
