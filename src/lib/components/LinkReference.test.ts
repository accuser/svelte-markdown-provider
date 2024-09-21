import { render } from '@testing-library/svelte';
import { describe, expect, test, vi } from 'vitest';
import LinkReference, { type Props } from './LinkReference.svelte';

vi.mock('$lib/contexts/markdown-context.js', async () => {
	const actual = await vi.importActual('$lib/contexts/markdown-context.js');

	return {
		...actual,
		getMarkdownContext: vi.fn().mockReturnValue({
			getDefinition: vi.fn().mockReturnValue({
				title: 'Example',
				url: 'https://example.com'
			})
		})
	};
});

describe('LinkReference.svelte', async () => {
	const it = test.extend<{
		props: Props;
	}>({
		props: {
			type: 'linkReference',
			identifier: 'example',
			referenceType: 'full',
			children: [{ type: 'text', value: 'Hello, World!' }]
		}
	});

	it('renders <a>', async ({ props }) => {
		const { container } = render(LinkReference, { props });

		expect(container.querySelector('a')).toBeInTheDocument();
	});

	it('renders <a> with `href` attibute', async ({ props }) => {
		const { container } = render(LinkReference, { props });

		expect(container.querySelector('a')).toHaveAttribute('href', 'https://example.com');
	});

	it('renders <a> with `title` attibute', async ({ props }) => {
		const { container } = render(LinkReference, { props });

		expect(container.querySelector('a')).toHaveAttribute('title', 'Example');
	});

	it('renders <a> with content', async ({ props }) => {
		const { container } = render(LinkReference, { props });

		expect(container.querySelector('a')).toHaveTextContent('Hello, World!');
	});
});
