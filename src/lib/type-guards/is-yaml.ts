import isNode from './is-node.js';

export default (node: import('mdast').Node | null | undefined): node is import('mdast').Yaml =>
	isNode(node) && node.type === 'yaml';
