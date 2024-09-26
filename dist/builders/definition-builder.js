import { collect } from '../defaults/collect.js';
import { isDefinition } from '@accuser/mdast-util-type-guards';
const definitionsFrom = (root) => collect(root, isDefinition);
export default (root) => {
    const cache = definitionsFrom(root).reduce((acc, def) => Object.assign(acc, { [def.identifier]: def }), {});
    return (identifier) => identifier !== null && identifier !== undefined ? cache[identifier] : undefined;
};
