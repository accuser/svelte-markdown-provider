import isParent from './is-parent.js';
export default (node) => isParent(node) &&
    node.type === 'containerDirective' &&
    'name' in node &&
    typeof node.name === 'string';
