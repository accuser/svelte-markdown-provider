import { directiveFromMarkdown } from 'mdast-util-directive';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { mathFromMarkdown } from 'mdast-util-math';

export default [
	directiveFromMarkdown(),
	frontmatterFromMarkdown(['yaml']),
	gfmFromMarkdown(),
	mathFromMarkdown()
];
