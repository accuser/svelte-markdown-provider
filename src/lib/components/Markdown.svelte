<script lang="ts">
	import { MARKDOWN_COMPONENTS_TOKEN } from '$lib/tokens/markdown-components.token.js';
	import { MARKDOWN_DIRECTIVES_TOKEN } from '$lib/tokens/markdown-directives.token.js';
	import { getContext, setContext } from 'svelte';

	type Components = Record<
		import('mdast').Nodes['type'],
		import('svelte').ComponentType | undefined
	>;
	type Directives = Record<
		import('mdast-util-directive').Directives['type'],
		Record<string, import('svelte').ComponentType | undefined>
	>;

	export let node: import('mdast').Nodes;
	let _components: Components | undefined = undefined;
	let _directives: Directives | undefined = undefined;

	export { _components as components, _directives as directives };

	const components = _components
		? setContext(MARKDOWN_COMPONENTS_TOKEN, _components)
		: getContext<Components>(MARKDOWN_COMPONENTS_TOKEN);

	const directives = _directives
		? setContext(MARKDOWN_DIRECTIVES_TOKEN, _directives)
		: getContext<Directives>(MARKDOWN_DIRECTIVES_TOKEN);

	const { type } = node;

	const component =
		directives &&
		(type === 'containerDirective' || type === 'leafDirective' || type === 'textDirective')
			? directives[type][node.name]
			: components
				? components[type]
				: undefined;

	if (!component) {
		console.warn(`Unrecognized node type "${type}"`);
	}
</script>

<svelte:component this={component} {node} />
