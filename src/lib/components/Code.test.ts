import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Code from './Code.svelte';

describe('Code.svelte', async () => {
	it('renders <code>', async () => {
		const { container } = render(Code, {
			props: {
				node: {
					lang: 'javascript',
					type: 'code',
					value: 'console.log("Hello, World!");'
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<pre><code lang="javascript">console.log("Hello, World!");</code></pre>'
		);
	});
});
