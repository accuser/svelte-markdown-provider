import isContainerDirective from './is-container-directive.js';
import isLeafDirective from './is-leaf-directive.js';
import isTextDirective from './is-text-directive.js';

export default (
	node: import('mdast').Node | null | undefined
): node is import('mdast-util-directive').Directives =>
	isContainerDirective(node) || isLeafDirective(node) || isTextDirective(node);
