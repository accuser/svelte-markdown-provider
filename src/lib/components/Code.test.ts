import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Code from './Code.svelte';

describe('Code.svelte', async () => {
    it('renders <code> in <pre>', async () => {
        const { container } = render(Code, {
            props: {
                node: {
                    lang: 'javascript',
                    type: 'code',
                    value: 'console.log("Hello, World!");'
                }
            }
        });

        expect(container.querySelector('pre code')).toBeInTheDocument()
    });

    it('renders <code> in <pre> with `lang` attribute', async () => {
        const { container } = render(Code, {
            props: {
                node: {
                    lang: 'javascript',
                    type: 'code',
                    value: 'console.log("Hello, World!");'
                }
            }
        });

        expect(container.querySelector('pre code')).toHaveAttribute("lang", "javascript");
    });

    it('renders <code> in <pre> with content', async () => {
        const { container } = render(Code, {
            props: {
                node: {
                    lang: 'javascript',
                    type: 'code',
                    value: 'console.log("Hello, World!");'
                }
            }
        })

        expect(container.querySelector('pre code[lang="javascript"]')).toHaveTextContent('console.log("Hello, World!");');
    });
});
