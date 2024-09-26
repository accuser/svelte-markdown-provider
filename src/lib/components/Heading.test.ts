import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Heading, { type Props } from './Heading.svelte';

describe('Heading.svelte', async () => {
	for (const depth of [1, 2, 3, 4, 5, 6] as Props['depth'][]) {
		const it = test.extend<{
			props: Props;
		}>({
			props: {
				children: [{ type: 'text', value: 'Hello, World!' }],
				depth,
				type: 'heading'
			}
		});

		it(`renders <h${depth}>`, async ({ props }) => {
			const { container } = render(Heading, { props });

			expect(container.querySelector(`h${depth}`)).toBeInTheDocument();
		});

		it(`renders <h${depth}> with \`id\` attibute`, async ({ props }) => {
			const { container } = render(Heading, { props });

			expect(container.querySelector(`h${depth}`)).toHaveAttribute('id', 'hello-world');
		});

		it(`renders <h${depth}> with content`, async ({ props }) => {
			const { container } = render(Heading, { props });

			expect(container.querySelector(`h${depth}`)).toHaveTextContent('Hello, World!');
		});
	}
});
