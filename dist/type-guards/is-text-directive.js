import isParent from './is-parent.js';
export default (node) => isParent(node) &&
    node.type === 'textDirective' &&
    'name' in node &&
    typeof node.name === 'string';
