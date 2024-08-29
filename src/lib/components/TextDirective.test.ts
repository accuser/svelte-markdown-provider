import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TextDirective from './TextDirective.svelte';

describe('TextDirective.svelte', async () => {
	it('renders an HTML comment', async () => {
		const { container } = render(TextDirective, {
			props: {
				node: {
					name: 'container',
					type: 'textDirective',
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.outerHTML).toContain('<!-- Unrecognized text directive :container -->');
	});

	it('renders <span> with `class` attribute', async () => {
		const { container } = render(TextDirective, {
			props: {
				node: {
					name: 'container',
					type: 'textDirective',
					attributes: { foo: 'bar' },
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.querySelector('span.container')).toBeInTheDocument();
	});

	it('renders <span> with content', async () => {
		const { container } = render(TextDirective, {
			props: {
				node: {
					name: 'container',
					type: 'textDirective',
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.querySelector('span.container')).toHaveTextContent('Hello, World!');
	});
});
