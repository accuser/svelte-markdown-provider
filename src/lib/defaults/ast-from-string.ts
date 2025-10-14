import type { Root } from 'mdast';
import { directiveFromMarkdown } from 'mdast-util-directive';
import { fromMarkdown, type Options } from 'mdast-util-from-markdown';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { directive } from 'micromark-extension-directive';
import { frontmatter } from 'micromark-extension-frontmatter';

export default ((src) =>
	fromMarkdown(src, {
		extensions: [directive(), frontmatter(['yaml'])],
		mdastExtensions: [directiveFromMarkdown(), frontmatterFromMarkdown()]
	})) satisfies (src: string, options?: Options) => Root;
