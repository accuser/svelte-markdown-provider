import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import InlineMath from './InlineMath.svelte';

describe('InlineMath.svelte', async () => {
	it('renders <code>', async () => {
		const { container } = render(InlineMath, {
			props: {
				type: 'inlineMath',
				value: 'C'
			}
		});

		expect(container.querySelector('code')).toBeInTheDocument();
	});

	it('renders <code> with `language-math` class', async () => {
		const { container } = render(InlineMath, {
			props: {
				type: 'inlineMath',
				value: 'C'
			}
		});

		expect(container.querySelector('code.language-math')).toBeInTheDocument();
	});

	it('renders <code> with `math-inline` class', async () => {
		const { container } = render(InlineMath, {
			props: {
				type: 'inlineMath',
				value: 'C'
			}
		});

		expect(container.querySelector('code.math-inline')).toBeInTheDocument();
	});

	it('renders <code> with content', async () => {
		const { container } = render(InlineMath, {
			props: {
				type: 'inlineMath',
				value: 'C'
			}
		});

		expect(container.querySelector('code')).toHaveTextContent('C');
	});
});
