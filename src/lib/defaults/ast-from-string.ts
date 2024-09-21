import { fromMarkdown } from 'mdast-util-from-markdown';
import defaultExtensions from './extensions.js';
import defaultMdastExtensions from './mdast-extensions.js';

export default (src: { toString: () => string }) =>
	fromMarkdown(src.toString(), {
		extensions: defaultExtensions,
		mdastExtensions: defaultMdastExtensions
	});
