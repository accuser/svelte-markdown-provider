import { Markdown } from '@accuser/svelte-markdown-provider';
import { mount } from 'svelte';
import { beforeEach, describe, expect, it, vi } from 'vitest';

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
		it('should render markdown', () => {
			mount(Markdown, {
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
				},
				target: document.body
			});

			expect(document.body.querySelector('p')).toHaveTextContent('Hello, World!');
		});
	});

	describe('when `src` attribute is provided', () => {
		it('should render markdown', () => {
			mount(Markdown, {
				props: {
					src: 'Hello, World!'
				},
				target: document.body
			});

			expect(document.body.querySelector('p')).toHaveTextContent('Hello, World!');
		});
	});
});
