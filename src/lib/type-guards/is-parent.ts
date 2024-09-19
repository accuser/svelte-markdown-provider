import isNode from './is-node.js';

export default (node: import('mdast').Node | null | undefined): node is import('mdast').Parent =>
	isNode(node) && 'children' in node && Array.isArray(node.children);
