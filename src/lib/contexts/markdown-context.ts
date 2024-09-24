import type { MarkdownContext } from '$lib/types/markdown-context.js';
import { getContext, setContext } from 'svelte';

const MARKDOWN_CONTEXT_TOKEN = Symbol('markdown-context');

export const getMarkdownContext = () =>
	getContext<MarkdownContext>(MARKDOWN_CONTEXT_TOKEN) ?? ({} as MarkdownContext);

export const setMarkdownContext = (context: MarkdownContext) =>
	setContext(MARKDOWN_CONTEXT_TOKEN, context);
