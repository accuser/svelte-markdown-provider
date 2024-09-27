import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Html from './Html.svelte';

describe('Html.svelte', async () => {
	const it = test.extend<{ props: ComponentProps<Html> }>({
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
