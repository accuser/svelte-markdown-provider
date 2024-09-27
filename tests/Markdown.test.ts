import { Markdown } from '@accuser/svelte-markdown-provider';
import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test, vi } from 'vitest';

vi.mock('@accuser/svelte-markdown-provider', async () => {
	const actual = await import('@accuser/svelte-markdown-provider');
	return {
		...actual,
		getMarkdownContext: vi.fn().mockReturnValue({})
	};
});

describe('Markdown.svelte', () => {
	describe('when `ast` attribute is provided', () => {
		const it = test.extend<{ props: ComponentProps<Markdown> }>({
			props: {
				ast: {
					type: 'root',
					children: [
						{
							type: 'paragraph',
							children: [{ type: 'text', value: 'Hello, World!' }]
						}
					]
				}
			}
		});

		it('should render markdown', ({ props }) => {
			const { container } = render(Markdown, { props });

			expect(container.querySelector('p')).toHaveTextContent('Hello, World!');
		});
	});

	describe('when `src` attribute is provided', () => {
		const it = test.extend<{ props: ComponentProps<Markdown> }>({
			props: {
				src: 'Hello, World!'
			}
		});

		it('should render markdown', ({ props }) => {
			const { container } = render(Markdown, { props });

			expect(container.querySelector('p')).toHaveTextContent('Hello, World!');
		});
	});
});
