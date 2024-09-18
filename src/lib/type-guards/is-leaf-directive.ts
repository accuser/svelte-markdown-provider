import isParent from './is-parent.js';

export default (node: import('mdast').Node): node is import('mdast-util-directive').LeafDirective =>
	isParent(node) &&
	node.type === 'leafDirective' &&
	'name' in node &&
	typeof node.name === 'string';
