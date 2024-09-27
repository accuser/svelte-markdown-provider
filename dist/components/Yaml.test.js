import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Yaml from './Yaml.svelte';
describe('Yaml.svelte', () => {
    const it = test.extend({
        props: {
            type: 'yaml',
            value: 'key: value'
        }
    });
    it('renders nothing', ({ props }) => {
        const { container } = render(Yaml, { props });
        expect(container).toHaveTextContent('');
    });
});
