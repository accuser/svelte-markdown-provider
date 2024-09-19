import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context.token.js';
import type { MarkdownContext } from '$lib/types/markdown-context.js';
import { setContext } from 'svelte';

export default (context: MarkdownContext) => setContext(MARKDOWN_CONTEXT_TOKEN, context);
