import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import List from './List.svelte';

describe('List.svelte', async () => {
	describe('when `ordered` is `undefined` or `false`', async () => {
		for (const ordered of [undefined, false]) {
			const it = test.extend<{ props: import('mdast').List }>({
				props: {
					children: [
						{
							type: 'listItem',
							children: [
								{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }
							]
						}
					],
					type: 'list',
					ordered
				}
			});

			it('renders <ul>', async ({ props }) => {
				const { container } = render(List, { props });

				expect(container.querySelector('ul')).toBeInTheDocument();
			});

			it('renders <ul> with content', async ({ props }) => {
				const { container } = render(List, { props });

				expect(container.querySelector('ul li')).toHaveTextContent('Hello, World!');
			});
		}
	});

	describe('when `ordered` is `true`', async () => {
		const it = test.extend<{ props: import('mdast').List }>({
			props: {
				children: [
					{
						type: 'listItem',
						children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }]
					}
				],
				type: 'list',
				ordered: true
			}
		});

		it('renders <ol>', async ({ props }) => {
			const { container } = render(List, { props });

			expect(container.querySelector('ol')).toBeInTheDocument();
		});

		it('renders <ol> with content', async ({ props }) => {
			const { container } = render(List, { props });

			expect(container.querySelector('ol li')).toHaveTextContent('Hello, World!');
		});

		describe('and `start` is defined', async () => {
			it('renders <ol> with a `start` attribute', async ({ props }) => {
				const { container } = render(List, { props: { ...props, start: 2 } });

				expect(container.querySelector('ol')).toHaveAttribute('start', '2');
			});
		});
	});
});
