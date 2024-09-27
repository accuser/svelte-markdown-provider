import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import FootnoteDefinition from './FootnoteDefinition.svelte';

describe('FootnoteDefinition.svelte', () => {
	const it = test.extend<{ props: ComponentProps<FootnoteDefinition> }>({
		props: {
			type: 'footnoteDefinition',
			identifier: '1',
			children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
			label: '1'
		}
	});

	it('renders <div>', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div')).toBeInTheDocument();
	});

	it('renders <div> with `id` attribute', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1')).toBeInTheDocument();
	});

	it('renders <p> in <div>', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 > p')).toBeInTheDocument();
	});

	it('renders <p> in <div> with `label` content', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 > p')).toHaveTextContent('1');
	});

	it('renders <a> in <div>', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 > a')).toBeInTheDocument();
	});

	it('renders <a> in <div> with `href` attribute', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 > a')).toHaveAttribute(
			'href',
			'#footnote-ref-1'
		);
	});

	it('renders <a> in <div> with `aria-label', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 > a')).toHaveAttribute(
			'aria-label',
			'Back to content'
		);
	});

	it('renders <a> in <div> with content', ({ props }) => {
		const { container } = render(FootnoteDefinition, { props });

		expect(container.querySelector('div#footnote-1 a')).toHaveTextContent('↩');
	});
});
