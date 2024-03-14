import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Heading from './Heading.svelte';

describe('Heading.svelte', async () => {
	it('renders <h1>', async () => {
		const { container } = render(Heading, {
			props: {
				node: {
					type: 'heading',
					depth: 1,
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><h1 id="hello-world"><!--<Markdown>--><!--<Children>--></h1><!--<Heading>--></div>'
		);
	});

	it('renders <h2>', async () => {
		const { container } = render(Heading, {
			props: {
				node: {
					type: 'heading',
					depth: 2,
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><h2 id="hello-world"><!--<Markdown>--><!--<Children>--></h2><!--<Heading>--></div>'
		);
	});

	it('renders <h3>', async () => {
		const { container } = render(Heading, {
			props: {
				node: {
					type: 'heading',
					depth: 3,
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><h3 id="hello-world"><!--<Markdown>--><!--<Children>--></h3><!--<Heading>--></div>'
		);
	});

	it('renders <h4>', async () => {
		const { container } = render(Heading, {
			props: {
				node: {
					type: 'heading',
					depth: 4,
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><h4 id="hello-world"><!--<Markdown>--><!--<Children>--></h4><!--<Heading>--></div>'
		);
	});

	it('renders <h5>', async () => {
		const { container } = render(Heading, {
			props: {
				node: {
					type: 'heading',
					depth: 5,
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><h5 id="hello-world"><!--<Markdown>--><!--<Children>--></h5><!--<Heading>--></div>'
		);
	});

	it('renders <h6>', async () => {
		const { container } = render(Heading, {
			props: {
				node: {
					type: 'heading',
					depth: 6,
					children: [{ type: 'text', value: 'Hello, World!' }]
				}
			}
		});

		expect(container.innerHTML).toContain(
			'<div><h6 id="hello-world"><!--<Markdown>--><!--<Children>--></h6><!--<Heading>--></div>'
		);
	});
});
