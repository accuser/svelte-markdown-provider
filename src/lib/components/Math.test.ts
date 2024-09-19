import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Math, { type Props } from './Math.svelte';

describe('Math.svelte', async () => {
	const it = test.extend<{ props: Props }>({
		props: {
			type: 'math',
			value: 'C'
		}
	});

	it('renders <span>', async ({ props }) => {
		const { container } = render(Math, { props });

		expect(container.querySelector('span')).toBeInTheDocument();
	});

	it('renders <span> with `katex` class', async ({ props }) => {
		const { container } = render(Math, { props });

		expect(container.querySelector('span.katex')).toBeInTheDocument();
	});

	it('renders <span> with content', async ({ props }) => {
		const { container } = render(Math, { props });

		expect(container.querySelector('span.katex')).toHaveTextContent('C');
	});
});
