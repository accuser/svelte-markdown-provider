import { fromMarkdown } from 'mdast-util-from-markdown';
import defaultExtensions from './extensions.js';
import defaultMdastExtensions from './mdast-extensions.js';

export default (src: string) =>
	fromMarkdown(src, {
		extensions: defaultExtensions,
		mdastExtensions: defaultMdastExtensions
	});
