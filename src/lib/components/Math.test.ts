import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Math from './Math.svelte';

describe('Math.svelte', async () => {
	const it = test.extend<{ props: import('mdast-util-math').Math }>({
		props: {
			type: 'math',
			value: 'C'
		}
	});

	it('renders <code>', async ({ props }) => {
		const { container } = render(Math, { props });

		expect(container.querySelector('code')).toBeInTheDocument();
	});

	it('renders <code> with `language-math` class', async ({ props }) => {
		const { container } = render(Math, { props });

		expect(container.querySelector('code.language-math')).toBeInTheDocument();
	});

	it('renders <code> with `math-display` class', async ({ props }) => {
		const { container } = render(Math, { props });

		expect(container.querySelector('code.math-display')).toBeInTheDocument();
	});

	it('renders <code> with content', async ({ props }) => {
		const { container } = render(Math, { props });

		expect(container.querySelector('code')).toHaveTextContent('C');
	});
});
