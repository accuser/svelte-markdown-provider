import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Html from './Html.svelte';
describe('Html.svelte', () => {
    const it = test.extend({
        props: {
            type: 'html',
            value: '<pre>Hello, World!</pre>'
        }
    });
    it('renders html', ({ props }) => {
        const { container } = render(Html, { props });
        expect(container.querySelector('pre')).toBeInTheDocument();
    });
});
