import isNode from './is-node.js';
export default (node) => isNode(node) && 'children' in node && Array.isArray(node.children);
