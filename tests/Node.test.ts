import { Node } from '@accuser/svelte-markdown-provider';
import { render } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@accuser/svelte-markdown-provider', async () => {
	const actual = await import('@accuser/svelte-markdown-provider');
	return {
		...actual,
		getMarkdownContext: vi.fn().mockReturnValue({})
	};
});

describe('Node.svelte', () => {
	it('should render literal nodes', () => {
		const { container } = render(Node, { props: { type: 'text', value: 'Hello, World!' } });

		expect(container).toHaveTextContent('Hello, World!');
	});

	it('should render parent nodes', () => {
		const { container } = render(Node, {
			props: { type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }
		});

		expect(container.querySelector('p')).toHaveTextContent('Hello, World!');
	});
});
