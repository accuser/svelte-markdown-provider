import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import InlineCode from './InlineCode.svelte';

describe('InlineCode.svelte', async () => {
	it('renders <code>', async () => {
		const { container } = render(InlineCode, {
			props: {
				type: 'inlineCode',
				value: 'console.log("Hello, World!");'
			}
		});

		expect(container.querySelector('code')).toBeInTheDocument();
	});

	it('renders <code> with content', async () => {
		const { container } = render(InlineCode, {
			props: {
				type: 'inlineCode',
				value: 'console.log("Hello, World!");'
			}
		});

		expect(container.querySelector('code')).toHaveTextContent('console.log("Hello, World!");');
	});
});
