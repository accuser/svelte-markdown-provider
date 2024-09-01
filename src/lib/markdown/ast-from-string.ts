import { directiveFromMarkdown } from 'mdast-util-directive';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { mathFromMarkdown } from 'mdast-util-math';
import { directive } from 'micromark-extension-directive';
import { frontmatter } from 'micromark-extension-frontmatter';
import { gfm } from 'micromark-extension-gfm';
import { math } from 'micromark-extension-math';
import transforms from './transforms/index.js';

export const DEFAULT_EXTENSIONS = [directive(), frontmatter(['yaml']), gfm(), math()];
export const DEFAULT_MDAST_EXTENSIONS = [
	directiveFromMarkdown(),
	frontmatterFromMarkdown(['yaml']),
	gfmFromMarkdown(),
	mathFromMarkdown(),
	transforms()
];

export default ((
	src: string,
	{ extensions = DEFAULT_EXTENSIONS, mdastExtensions = DEFAULT_MDAST_EXTENSIONS } = {}
) => fromMarkdown(src, { extensions, mdastExtensions })) as (
	src: string,
	options?: import('mdast-util-from-markdown').Options
) => import('mdast').Root;
