import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import InlineMath from './InlineMath.svelte';

describe('InlineMath.svelte', async () => {
	const it = test.extend<{ props: import('mdast-util-math').InlineMath }>({
		props: {
			type: 'inlineMath',
			value: 'C'
		}
	});

	it('renders <code>', async ({ props }) => {
		const { container } = render(InlineMath, { props });

		expect(container.querySelector('code')).toBeInTheDocument();
	});

	it('renders <code> with `language-math` class', async ({ props }) => {
		const { container } = render(InlineMath, { props });

		expect(container.querySelector('code.language-math')).toBeInTheDocument();
	});

	it('renders <code> with `math-inline` class', async ({ props }) => {
		const { container } = render(InlineMath, { props });

		expect(container.querySelector('code.math-inline')).toBeInTheDocument();
	});

	it('renders <code> with content', async ({ props }) => {
		const { container } = render(InlineMath, { props });

		expect(container.querySelector('code')).toHaveTextContent('C');
	});
});
