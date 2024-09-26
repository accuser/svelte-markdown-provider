import { directiveFromMarkdown } from 'mdast-util-directive';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
export default [directiveFromMarkdown(), frontmatterFromMarkdown(['yaml'])];
