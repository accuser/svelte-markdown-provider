import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import LeafDirective from './LeafDirective.svelte';

describe('LeafDirective.svelte', async () => {
	it('renders an HTML comment', async () => {
		const { container } = render(LeafDirective, {
			props: {
				node: {
					name: 'container',
					type: 'leafDirective',
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.outerHTML).toContain('<!-- Unrecognized leaf directive ::container -->');
	});

	it('renders <div> with `class` attribute', async () => {
		const { container } = render(LeafDirective, {
			props: {
				node: {
					name: 'container',
					type: 'leafDirective',
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.querySelector('div.container')).toBeInTheDocument();
	});

	it('renders <div> with content', async () => {
		const { container } = render(LeafDirective, {
			props: {
				node: {
					name: 'container',
					type: 'leafDirective',
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.querySelector('div.container')).toHaveTextContent('Hello, World!');
	});
});
