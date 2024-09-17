import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ContainerDirective from './ContainerDirective.svelte';

describe('ContainerDirective.svelte', async () => {
	it('renders an HTML comment', async () => {
		const { container } = render(ContainerDirective, {
			props: {
				name: 'container',
				type: 'containerDirective',
				children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }]
			}
		});

		expect(container.outerHTML).toContain('<!-- Unrecognized container directive :::container -->');
	});

	it('renders <div> with `class` attribute', async () => {
		const { container } = render(ContainerDirective, {
			props: {
				name: 'container',
				type: 'containerDirective',
				children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }]
			}
		});

		expect(container.querySelector('div.container')).toBeInTheDocument();
	});

	it('renders <div> with content', async () => {
		const { container } = render(ContainerDirective, {
			props: {
				name: 'container',
				type: 'containerDirective',
				children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }]
			}
		});

		expect(container.querySelector('div.container')).toHaveTextContent('Hello, World!');
	});
});
