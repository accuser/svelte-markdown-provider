import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Yaml from './Yaml.svelte';

describe('Yaml.svelte', async () => {
	const it = test.extend<{ props: ComponentProps<Yaml> }>({
		props: {
			type: 'yaml',
			value: 'key: value'
		}
	});

	it('renders nothing', async ({ props }) => {
		const { container } = render(Yaml, { props });

		expect(container).toHaveTextContent('');
	});
});
