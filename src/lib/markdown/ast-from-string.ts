import { fromMarkdown } from 'mdast-util-from-markdown';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { frontmatter } from 'micromark-extension-frontmatter';
import { gfm } from 'micromark-extension-gfm';

export const DEFAULT_EXTENSIONS = [frontmatter(['yaml']), gfm()];
export const DEFAULT_MDAST_EXTENSIONS = [frontmatterFromMarkdown(['yaml']), gfmFromMarkdown()];

export default ((
	src: string,
	{ extensions = DEFAULT_EXTENSIONS, mdastExtensions = DEFAULT_MDAST_EXTENSIONS } = {}
) => fromMarkdown(src, { extensions, mdastExtensions })) as (
	src: string,
	options?: import('mdast-util-from-markdown').Options
) => import('mdast').Root;
