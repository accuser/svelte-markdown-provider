import { fromMarkdown } from 'mdast-util-from-markdown';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { frontmatter } from 'micromark-extension-frontmatter';
import { gfm } from 'micromark-extension-gfm';

export default (src: string) =>
	fromMarkdown(src, {
		extensions: [frontmatter(['yaml']), gfm()],
		mdastExtensions: [frontmatterFromMarkdown(['yaml']), gfmFromMarkdown()]
	});
