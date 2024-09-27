import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import ContainerDirective from './ContainerDirective.svelte';

describe('ContainerDirective.svelte', () => {
	const it = test.extend<{ props: ComponentProps<ContainerDirective> }>({
		props: {
			name: 'container',
			type: 'containerDirective',
			children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }]
		}
	});

	it('renders an HTML comment', ({ props }) => {
		const { container } = render(ContainerDirective, { props });

		expect(container.outerHTML).toContain('<!-- Unrecognized container directive :::container -->');
	});

	it('renders <div>', ({ props }) => {
		const { container } = render(ContainerDirective, { props });

		expect(container.querySelector('div')).toBeInTheDocument();
	});

	it('renders <div> with `class` attribute', ({ props }) => {
		const { container } = render(ContainerDirective, { props });

		expect(container.querySelector('div.container')).toBeInTheDocument();
	});

	it('renders <div> with content', ({ props }) => {
		const { container } = render(ContainerDirective, { props });

		expect(container.querySelector('div.container')).toHaveTextContent('Hello, World!');
	});
});
