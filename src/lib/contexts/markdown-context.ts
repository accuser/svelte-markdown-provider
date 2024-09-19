import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context.token.js';
import type { MarkdownContext } from '$lib/types/markdown-context.js';
import { getContext } from 'svelte';

export default () => getContext<MarkdownContext>(MARKDOWN_CONTEXT_TOKEN) ?? ({} as MarkdownContext);
