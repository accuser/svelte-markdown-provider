# Svelte Markdown Provider

Transforms a [Markdown AST](https://github.com/syntax-tree/mdast) into Svelte components.

> [!NOTE]
> You probably don't want this - look at [mdsvex](https://mdsvex.pngwn.io) instead.

## Installing

Add the `@accuser/svelte-markdown-provider` package dependency to your [Svelte](https://svelte.dev) / [SvelteKit](https://kit.svelte.dev) project:

```sh
npm install --save-dev svelte-markdown-provider
```

## Usage

```html
<script>
    import { Markdown, MarkdownProvider } from '@accuser/svelte-markdown-provider';

    const node = {
        type: 'root',
        children: [{
           type: 'paragraph',
           children: [{
                type: 'text',
                value: 'Hello, World!'
            }]
        }]
    };
</script>

<MarkdownProvider let:components>
    <Markdown {node} {components} />
</MarkdownProvider>
```
