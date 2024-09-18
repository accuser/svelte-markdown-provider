import isParent from './is-parent.js';

export default (
	node: import('mdast').Node
): node is import('mdast-util-directive').ContainerDirective =>
	isParent(node) &&
	node.type === 'containerDirective' &&
	'name' in node &&
	typeof node.name === 'string';
