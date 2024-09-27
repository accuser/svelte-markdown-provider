import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Text from './Text.svelte';
describe('Text.svelte', () => {
    const it = test.extend({
        props: {
            type: 'text',
            value: 'Hello, World!'
        }
    });
    it('renders text', ({ props }) => {
        const { container } = render(Text, { props });
        expect(container).toHaveTextContent('Hello, World!');
    });
});
