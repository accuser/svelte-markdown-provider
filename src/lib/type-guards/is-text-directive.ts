import isParent from './is-parent.js';

export default (node: import('mdast').Node): node is import('mdast-util-directive').TextDirective =>
	isParent(node) &&
	node.type === 'textDirective' &&
	'name' in node &&
	typeof node.name === 'string';