import { getContext, setContext } from 'svelte';
const MARKDOWN_CONTEXT_TOKEN = Symbol('markdown-context');
export const getMarkdownContext = () => getContext(MARKDOWN_CONTEXT_TOKEN) ?? {};
export const setMmarkdownContext = (context) => setContext(MARKDOWN_CONTEXT_TOKEN, context);
export default getMarkdownContext;
