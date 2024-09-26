import { directive } from 'micromark-extension-directive';
import { frontmatter } from 'micromark-extension-frontmatter';
export default [directive(), frontmatter(['yaml'])];
