import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import ContainerDirective, {} from './ContainerDirective.svelte';
describe('ContainerDirective.svelte', async () => {
    const it = test.extend({
        props: {
            name: 'container',
            type: 'containerDirective',
            children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }]
        }
    });
    it('renders an HTML comment', async ({ props }) => {
        const { container } = render(ContainerDirective, { props });
        expect(container.outerHTML).toContain('<!-- Unrecognized container directive :::container -->');
    });
    it('renders <div>', async ({ props }) => {
        const { container } = render(ContainerDirective, { props });
        expect(container.querySelector('div')).toBeInTheDocument();
    });
    it('renders <div> with `class` attribute', async ({ props }) => {
        const { container } = render(ContainerDirective, { props });
        expect(container.querySelector('div.container')).toBeInTheDocument();
    });
    it('renders <div> with content', async ({ props }) => {
        const { container } = render(ContainerDirective, { props });
        expect(container.querySelector('div.container')).toHaveTextContent('Hello, World!');
    });
});
