import { collect } from '$lib/defaults/collect.js';
import { isDefinition } from '@accuser/mdast-util-type-guards';

const definitionsFrom = (root: import('mdast').Root) => collect(root, isDefinition);

export default (root: import('mdast').Root | undefined) => {
	if (root === undefined) return () => undefined;

	const cache = definitionsFrom(root).reduce(
		(acc, def) => Object.assign(acc, { [def.identifier]: def }),
		{} as Record<string, import('mdast').Definition>
	);

	return (identifier: string | null | undefined) =>
		identifier !== null && identifier !== undefined ? cache[identifier] : undefined;
};
