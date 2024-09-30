import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import ContainerDirective from './ContainerDirective.svelte';
describe('ContainerDirective.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            name: 'container',
            type: 'containerDirective',
            children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }]
        }
    });
    it('renders an HTML comment', ({ props }) => {
        mount(ContainerDirective, { props, target: document.body });
        expect(document.body.innerHTML).toContain('<!-- Unrecognized container directive :::container -->');
    });
    it('renders <div>', ({ props }) => {
        mount(ContainerDirective, { props, target: document.body });
        expect(document.body.querySelector('div')).toBeInTheDocument();
    });
    it('renders <div> with `class` attribute', ({ props }) => {
        mount(ContainerDirective, { props, target: document.body });
        expect(document.body.querySelector('div.container')).toBeInTheDocument();
    });
    it('renders <div> with content', ({ props }) => {
        mount(ContainerDirective, { props, target: document.body });
        expect(document.body.querySelector('div.container')).toHaveTextContent('Hello, World!');
    });
});
