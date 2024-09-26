import { collect } from '../defaults/collect.js';
import { isHeading } from '@accuser/mdast-util-type-guards';
import { slug } from 'github-slugger';
import { toString } from 'mdast-util-to-string';
const headingsFrom = (root, minDepth, maxDepth) => {
    const is = (node) => isHeading(node) && node.depth >= minDepth && node.depth <= maxDepth;
    return collect(root, is);
};
export default (root) => ({ minDepth = 1, maxDepth = 6, ordered } = {}) => headingsFrom(root, minDepth, maxDepth).reduce((acc, { children, data: { text = toString(children), id = slug(text) } = {} }) => {
    acc.children.push({
        type: 'listItem',
        children: [
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'link',
                        children: [{ type: 'text', value: text }],
                        url: `#${id}`
                    }
                ]
            }
        ]
    });
    return acc;
}, { type: 'list', ordered, children: [] });
