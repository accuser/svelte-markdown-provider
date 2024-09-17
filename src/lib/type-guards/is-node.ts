export default (node: import('mdast').Node): node is import('mdast').Nodes =>
	'type' in node && typeof node.type === 'string';
