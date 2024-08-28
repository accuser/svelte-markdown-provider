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

		expect(container.innerHTML).toContain('<!----><h1 id="hello-world"><!---->Hello, World!</h1>');
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

		expect(container.innerHTML).toContain('<!----><h2 id="hello-world"><!---->Hello, World!</h2>');
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

		expect(container.innerHTML).toContain('<!----><h3 id="hello-world"><!---->Hello, World!</h3>');
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

		expect(container.innerHTML).toContain('<!----><h4 id="hello-world"><!---->Hello, World!</h4>');
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

		expect(container.innerHTML).toContain('<!----><h5 id="hello-world"><!---->Hello, World!</h5>');
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

		expect(container.innerHTML).toContain('<!----><h6 id="hello-world"><!---->Hello, World!</h6>');
	});
});
