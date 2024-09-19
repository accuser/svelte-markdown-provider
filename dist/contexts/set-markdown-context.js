import MARKDOWN_CONTEXT_TOKEN from '../tokens/markdown-context.token.js';
import { setContext } from 'svelte';
export default (context) => setContext(MARKDOWN_CONTEXT_TOKEN, context);
