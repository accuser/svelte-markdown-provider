import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import TextDirective from './TextDirective.svelte';
describe('TextDirective.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            name: 'text',
            type: 'textDirective',
            children: [
                {
                    type: 'text',
                    value: 'Hello, World!'
                }
            ]
        }
    });
    it('renders an HTML comment', ({ props }) => {
        mount(TextDirective, { props, target: document.body });
        expect(document.body.innerHTML).toContain('<!-- Unrecognized text directive :text -->');
    });
    it('renders <span> with `class` attribute', ({ props }) => {
        mount(TextDirective, { props, target: document.body });
        expect(document.body.querySelector('span.text')).toBeInTheDocument();
    });
    it('renders <span> with content', ({ props }) => {
        mount(TextDirective, { props, target: document.body });
        expect(document.body.querySelector('span.text')).toHaveTextContent('Hello, World!');
    });
});
