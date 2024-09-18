import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Yaml from './Yaml.svelte';

describe('Yaml.svelte', async () => {
	const it = test.extend<{ props: import('mdast').Yaml }>({
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
