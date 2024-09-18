import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import FootnoteReference from './FootnoteReference.svelte';

describe('FootnoteReference.svelte', async () => {
	const it = test.extend<{
		props: import('mdast').FootnoteReference;
	}>({
		props: {
			type: 'footnoteReference',
			label: 'Example',
			identifier: 'example'
		}
	});

	it('renders <sup>', ({ props }) => {
		const { container } = render(FootnoteReference, { props });

		expect(container.querySelector('sup')).toBeInTheDocument();
	});

	it('renders <sup><a> with `id` attribute', ({ props }) => {
		const { container } = render(FootnoteReference, { props });

		expect(container.querySelector('sup a')).toHaveAttribute('id', 'footnote-ref-example');
	});

	it('renders <sup><a> with `href` attribute', ({ props }) => {
		const { container } = render(FootnoteReference, { props });

		expect(container.querySelector('sup a')).toHaveAttribute('href', '#footnote-example');
	});

	it('renders <sup><a> with `aria-describedby', ({ props }) => {
		const { container } = render(FootnoteReference, { props });

		expect(container.querySelector('sup a')).toHaveAttribute('aria-describedby', 'footnote-label');
	});

	it('renders <sup><a> with content', ({ props }) => {
		const { container } = render(FootnoteReference, { props });

		expect(container.querySelector('sup a')).toHaveTextContent('Example');
	});
});
