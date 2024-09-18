import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Link from './Link.svelte';

describe('Link.svelte', async () => {
	const it = test.extend<{ props: import('mdast').Link }>({
		props: {
			children: [{ type: 'text', value: 'Hello, World!' }],
			type: 'link',
			url: 'https://example.com'
		}
	});

	it('renders <a>', async ({ props }) => {
		const { container } = render(Link, { props });

		expect(container.querySelector('a')).toBeInTheDocument();
	});

	it('renders <a> with `href` attibute', async ({ props }) => {
		const { container } = render(Link, { props });

		expect(container.querySelector('a')).toHaveAttribute('href', 'https://example.com');
	});

	it('renders <a> with content', async ({ props }) => {
		const { container } = render(Link, { props });

		expect(container.querySelector('a')).toHaveTextContent('Hello, World!');
	});
});
