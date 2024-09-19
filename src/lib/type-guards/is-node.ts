export default (node: import('mdast').Node | null | undefined): node is import('mdast').Nodes =>
	node !== null && node !== undefined && 'type' in node && typeof node.type === 'string';
