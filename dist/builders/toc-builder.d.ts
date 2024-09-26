type Depth = import('mdast').Heading['depth'];
export type Options = {
    minDepth?: Depth;
    maxDepth?: Depth;
    ordered?: boolean;
};
declare const _default: (root: import("mdast").Root) => ({ minDepth, maxDepth, ordered }?: Options) => import("mdast").List;
export default _default;
