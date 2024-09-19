import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Break, {} from './Break.svelte';
describe('Break.svelte', async () => {
    const it = test.extend({ props: { type: 'break' } });
    it('renders <br>', async ({ props }) => {
        const { container } = render(Break, { props });
        expect(container.querySelector('br')).toBeInTheDocument();
    });
});
