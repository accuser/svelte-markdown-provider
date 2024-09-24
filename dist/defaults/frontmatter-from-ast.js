import { isRoot, isYaml } from '@accuser/mdast-util-type-guards';
import { parse } from 'yaml';
export default (ast) => {
    if (isRoot(ast) && ast.children.length > 0 && isYaml(ast.children[0])) {
        try {
            return parse(ast.children[0].value);
        }
        catch {
            return {};
        }
    }
    else {
        return {};
    }
};
