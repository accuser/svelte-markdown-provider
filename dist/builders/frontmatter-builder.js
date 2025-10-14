import { isYaml } from '@accuser/mdast-util-type-guards';
import { parse } from 'yaml';
const frontmatterFrom = (root) => {
    if (root.children.length > 0 && isYaml(root.children[0])) {
        try {
            return parse(root.children[0].value);
        }
        catch {
            return {};
        }
    }
};
export const frontmatterBuilder = (root) => {
    if (root === undefined)
        return () => undefined;
    let frontmatter = frontmatterFrom(root);
    return () => frontmatter;
};
