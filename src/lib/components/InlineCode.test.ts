import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import InlineCode from './InlineCode.svelte';

describe('InlineCode.svelte', async () => {
	it('renders <code>', async () => {
		const { container } = render(InlineCode, {
			props: {
				node: {
					type: 'inlineCode',
					value: 'console.log("Hello, World!");'
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><code>console.log("Hello, World!");</code><!--<InlineCode>--></div>'
		);
	});
});
