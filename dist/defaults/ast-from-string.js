import { fromMarkdown } from 'mdast-util-from-markdown';
import defaultExtensions from './extensions.js';
import defaultMdastExtensions from './mdast-extensions.js';
export default ((src, { extensions, mdastExtensions } = {}) => fromMarkdown(src, {
    extensions: [...defaultExtensions, ...(extensions ?? [])],
    mdastExtensions: [...defaultMdastExtensions, ...(mdastExtensions ?? [])]
}));
