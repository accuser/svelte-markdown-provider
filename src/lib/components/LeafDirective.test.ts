import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import LeafDirective from './LeafDirective.svelte';

describe('LeafDirective.svelte', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof LeafDirective> }>({
		props: {
			name: 'leaf',
			type: 'leafDirective',
			children: [{ type: 'text', value: 'Hello, World!' }]
		}
	});

	it('renders an HTML comment', ({ props }) => {
		mount(LeafDirective, { props, target: document.body });

		expect(document.body.innerHTML).toContain('<!-- Unrecognized leaf directive ::leaf -->');
	});

	it('renders <div>', ({ props }) => {
		mount(LeafDirective, { props, target: document.body });

		expect(document.body.querySelector('div')).toBeInTheDocument();
	});

	it('renders <div> with `class` attribute', ({ props }) => {
		mount(LeafDirective, { props, target: document.body });

		expect(document.body.querySelector('div.leaf')).toBeInTheDocument();
	});

	it('renders <div> with content', ({ props }) => {
		mount(LeafDirective, { props, target: document.body });

		expect(document.body.querySelector('div.leaf')).toHaveTextContent('Hello, World!');
	});
});
