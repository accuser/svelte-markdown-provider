import { Markdown } from '@accuser/svelte-markdown-provider';
import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('@accuser/svelte-markdown-provider', async () => {
	const actual = await import('@accuser/svelte-markdown-provider');
	return {
		...actual,
		getMarkdownContext: vi.fn().mockReturnValue({})
	};
});

describe('Markdown.svelte', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	describe('when `ast` attribute is provided', () => {
		const it = test.extend<{ props: ComponentProps<typeof Markdown> }>({
			props: {
				ast: {
					type: 'root',
					children: [
						{
							type: 'paragraph',
							children: [
								{
									type: 'text',
									value: 'Hello, World!'
								}
							]
						}
					]
				}
			}
		});

		it('should render markdown', ({ props }) => {
			mount(Markdown, { props, target: document.body });

			expect(document.body.querySelector('p')).toHaveTextContent('Hello, World!');
		});
	});

	describe('when `src` attribute is provided', () => {
		const it = test.extend<{ props: ComponentProps<typeof Markdown> }>({
			props: {
				src: 'Hello, World!'
			}
		});

		it('should render markdown', ({ props }) => {
			mount(Markdown, { props, target: document.body });

			expect(document.body.querySelector('p')).toHaveTextContent('Hello, World!');
		});
	});
});
