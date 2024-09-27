import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import List from './List.svelte';

describe('List.svelte', () => {
	for (const ordered of [undefined, false, true]) {
		const it = test.extend<{ props: ComponentProps<List> }>({
			props: {
				children: [
					{
						type: 'listItem',
						children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }]
					}
				],
				type: 'list',
				ordered
			}
		});

		if (ordered === true) {
			describe('when `ordered` is `true`', () => {
				it('renders <ol>', ({ props }) => {
					const { container } = render(List, { props });

					expect(container.querySelector('ol')).toBeInTheDocument();
				});

				it('renders <ol> with content', ({ props }) => {
					const { container } = render(List, { props });

					expect(container.querySelector('ol li')).toHaveTextContent('Hello, World!');
				});

				describe('and `start` is defined', () => {
					it('renders <ol> with a `start` attribute', ({ props }) => {
						const { container } = render(List, { props: { ...props, start: 2 } });

						expect(container.querySelector('ol')).toHaveAttribute('start', '2');
					});
				});
			});
		} else {
			describe('when `ordered` is `undefined` or `false`', () => {
				it('renders <ul>', ({ props }) => {
					const { container } = render(List, { props });

					expect(container.querySelector('ul')).toBeInTheDocument();
				});

				it('renders <ul> with content', ({ props }) => {
					const { container } = render(List, { props });

					expect(container.querySelector('ul li')).toHaveTextContent('Hello, World!');
				});
			});
		}
	}
});
