import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import List from './List.svelte';

describe('List.svelte', async () => {
	it('renders <ul>', async () => {
		const { container } = render(List, {
			props: {
				node: {
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
			}
		});

		expect(container.innerHTML).toContain('<!----><ul><!----><li><p>Hello, World!</p></li></ul>');
	});

	it('renders <ol>', async () => {
		const { container } = render(List, {
			props: {
				node: {
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
			}
		});

		expect(container.innerHTML).toContain('<!----><ol><!----><li><p>Hello, World!</p></li></ol>');
	});

	it('renders <ol> with a start attribute', async () => {
		const { container } = render(List, {
			props: {
				node: {
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
			}
		});

		expect(container.innerHTML).toContain(
			'<!----><ol start="2"><!----><li><p>Hello, World!</p></li></ol>'
		);
	});
});
