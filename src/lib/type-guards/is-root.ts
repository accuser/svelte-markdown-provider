import isParent from './is-parent.js';

export default (node: import('mdast').Node | null | undefined): node is import('mdast').Root =>
	isParent(node) && node.type === 'root';
