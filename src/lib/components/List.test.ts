import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import List from './List.svelte';

describe('List.svelte', async () => {
	it('renders <ul>', async () => {
		const { container } = render(List, {
			props: {
				node: {
					children: [],
					type: 'list'
				}
			}
		});

		expect(container.innerHTML).toContain('<div><ul><!--<Children>--></ul><!--<List>--></div>');
	});

	it('renders <ol>', async () => {
		const { container } = render(List, {
			props: {
				node: {
					children: [
						{
							type: 'listItem',
							children: []
						}
					],
					type: 'list',
					ordered: true
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><ol><!--<Markdown>--><!--<Children>--></ol><!--<List>--></div>'
		);
	});

	it('renders <ol> with a start attribute', async () => {
		const { container } = render(List, {
			props: {
				node: {
					children: [
						{
							type: 'listItem',
							children: []
						}
					],
					type: 'list',
					ordered: true,
					start: 2
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><ol start="2"><!--<Markdown>--><!--<Children>--></ol><!--<List>--></div>'
		);
	});
});
