export default (node: import('mdast').Node): node is import('mdast-util-directive').Directives =>
	(node && node.type === 'containerDirective') ||
	node.type === 'leafDirective' ||
	node.type === 'textDirective';
