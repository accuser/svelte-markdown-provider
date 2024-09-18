import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import FootnoteDefinition from './FootnoteDefinition.svelte';

describe('FootnoteDefinition.svelte', () => {
	const it = test.extend<{ props: import('mdast').FootnoteDefinition }>({
		props: {
			type: 'footnoteDefinition',
			identifier: '1',
			children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
			label: '1'
		}
	});

	it('renders <div> with `id` attribute', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1')).toBeInTheDocument();
	});

	it('renders <p> with `label` content', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 p')).toHaveTextContent('1');
	});

	it('renders <a> with `href`', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 a')).toHaveAttribute('href', '#footnote-ref-1');
	});

	it('renders <a> with `aria-label', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 a')).toHaveAttribute(
			'aria-label',
			'Back to content'
		);
	});

	it('renders <a> with content', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 a')).toHaveTextContent('↩');
	});
});
