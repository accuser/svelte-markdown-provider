import MARKDOWN_CONTEXT_TOKEN from '../tokens/markdown-context.token.js';
import { getContext } from 'svelte';
export default () => getContext(MARKDOWN_CONTEXT_TOKEN) ?? {};
