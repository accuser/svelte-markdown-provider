export type Directives<T extends import('mdast').Node = import('mdast-util-directive').Directives> =
	{
		[K in T['type']]: Record<
			string,
			import('svelte').Component<{ node: Extract<T, { type: K }> }> | undefined
		>;
	};
