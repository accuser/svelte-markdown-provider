import { Markdown } from '@accuser/svelte-markdown-provider';
import { render } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@accuser/svelte-markdown-provider', async () => {
	const actual = await import('@accuser/svelte-markdown-provider');
	return {
		...actual,
		getMarkdownContext: vi.fn().mockReturnValue({})
	};
});

describe('Markdown.svelte', () => {
	it('should render markdown from `src`', () => {
		const { container } = render(Markdown, { props: { src: 'Hello, World!' } });

		expect(container.querySelector('p')).toHaveTextContent('Hello, World!');
	});
});
