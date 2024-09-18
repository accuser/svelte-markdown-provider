import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import LeafDirective from './LeafDirective.svelte';

describe('LeafDirective.svelte', async () => {
	const it = test.extend<{ props: import('mdast-util-directive').LeafDirective }>({
		props: {
			name: 'container',
			type: 'leafDirective',
			children: [{ type: 'text', value: 'Hello, World!' }]
		}
	});

	it('renders an HTML comment', async ({ props }) => {
		const { container } = render(LeafDirective, { props });

		expect(container.outerHTML).toContain('<!-- Unrecognized leaf directive ::container -->');
	});

	it('renders <div> with `class` attribute', async ({ props }) => {
		const { container } = render(LeafDirective, { props });

		expect(container.querySelector('div.container')).toBeInTheDocument();
	});

	it('renders <div> with content', async ({ props }) => {
		const { container } = render(LeafDirective, { props });

		expect(container.querySelector('div.container')).toHaveTextContent('Hello, World!');
	});
});
