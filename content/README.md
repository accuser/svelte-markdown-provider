# Svelte Markdown Provider

A Svelte component that renders markdown, either from Markdown source (as a `string`) or an [mdast](https://github.com/syntax-tree/mdast) tree.


## Examples

- [Bindable](/bindable)
- [Directives](/directives)
- [Example](/example)
- [GitHub Flavour Markdown](/gfm)
- [HTML](/html)
- [Math](/math)

## Installation

```bash
# or yarn, or pnpm
npm install --save @accuser/svelte-markdown-provider
```

## Usage

```svelte
<script>
  import Markdown from '@accuser/svelte-markdown-provider';
</script>

<Markdown>
  # Hello, world!
</Markdown>
```
