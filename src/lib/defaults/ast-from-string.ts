import type { Root } from 'mdast';
import { fromMarkdown, type Options } from 'mdast-util-from-markdown';
import defaultExtensions from './extensions.js';
import defaultMdastExtensions from './mdast-extensions.js';

export default ((src, { extensions, mdastExtensions } = {}) =>
	fromMarkdown(src, {
		extensions: [...defaultExtensions, ...(extensions ?? [])],
		mdastExtensions: [...defaultMdastExtensions, ...(mdastExtensions ?? [])]
	})) satisfies (src: string, options?: Options) => Root;
