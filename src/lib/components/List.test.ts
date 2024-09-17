import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import List from './List.svelte';

describe('List.svelte', async () => {
	describe('when `ordered` is `false`', async () => {
		it('renders <ul>', async () => {
			const { container } = render(List, {
				props: {
					children: [
						{
							type: 'listItem',
							children: [
								{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }
							]
						}
					],
					type: 'list'
				}
			});

			expect(container.querySelector('ul')).toBeInTheDocument();
		});

		it('renders <ul> with content', async () => {
			const { container } = render(List, {
				props: {
					children: [
						{
							type: 'listItem',
							children: [
								{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }
							]
						}
					],
					type: 'list'
				}
			});

			expect(container.querySelector('ul li')).toHaveTextContent('Hello, World!');
		});
	});

	describe('when `ordered` is `true`', async () => {
		it('renders <ol>', async () => {
			const { container } = render(List, {
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
					ordered: true
				}
			});

			expect(container.querySelector('ol')).toBeInTheDocument();
		});

		it('renders <ol> with a `start` attribute', async () => {
			const { container } = render(List, {
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
					ordered: true,
					start: 2
				}
			});

			expect(container.querySelector('ol')).toHaveAttribute('start', '2');
		});

		it('renders <ol> with content', async () => {
			const { container } = render(List, {
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
					ordered: true
				}
			});

			expect(container.querySelector('ol li')).toHaveTextContent('Hello, World!');
		});
	});
});
