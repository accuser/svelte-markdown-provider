export type Components<T extends import('mdast').Node = import('mdast').Nodes> = {
	[K in T['type']]: import('svelte').Component<{ node: Extract<T, { type: K }> }>;
};
