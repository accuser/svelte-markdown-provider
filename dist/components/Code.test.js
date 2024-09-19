import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Code, {} from './Code.svelte';
describe('Code.svelte', async () => {
    const it = test.extend({
        props: {
            lang: 'javascript',
            type: 'code',
            value: 'console.log("Hello, World!");'
        }
    });
    it('renders <pre>', async ({ props }) => {
        const { container } = render(Code, { props });
        expect(container.querySelector('pre')).toBeInTheDocument();
    });
    it('renders <code> in <pre>', async ({ props }) => {
        const { container } = render(Code, { props });
        expect(container.querySelector('pre > code')).toBeInTheDocument();
    });
    it('renders <code> in <pre> with `lang` attribute', async ({ props }) => {
        const { container } = render(Code, { props });
        expect(container.querySelector('pre > code')).toHaveAttribute('lang', 'javascript');
    });
    it('renders <code> in <pre> with content', async ({ props }) => {
        const { container } = render(Code, { props });
        expect(container.querySelector('pre > code[lang="javascript"]')).toHaveTextContent('console.log("Hello, World!");');
    });
});
