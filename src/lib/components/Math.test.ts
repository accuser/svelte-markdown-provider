import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Math from './Math.svelte';

describe('Math.svelte', async () => {
	it('renders <code>', async () => {
		const { container } = render(Math, {
			props: {
				type: 'math',
				value: 'C'
			}
		});

		expect(container.querySelector('code')).toBeInTheDocument();
	});

	it('renders <code> with `language-math` class', async () => {
		const { container } = render(Math, {
			props: {
				type: 'math',
				value: 'C'
			}
		});

		expect(container.querySelector('code.language-math')).toBeInTheDocument();
	});

	it('renders <code> with `math-display` class', async () => {
		const { container } = render(Math, {
			props: {
				type: 'math',
				value: 'C'
			}
		});

		expect(container.querySelector('code.math-display')).toBeInTheDocument();
	});

	it('renders <code> with content', async () => {
		const { container } = render(Math, {
			props: {
				type: 'math',
				value: 'C'
			}
		});

		expect(container.querySelector('code')).toHaveTextContent('C');
	});
});
