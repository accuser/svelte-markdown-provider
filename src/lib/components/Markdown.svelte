<script lang="ts">
	import { MARKDOWN_COMPONENTS_TOKEN } from '$lib/tokens/markdown-components.token.js';
	import { MARKDOWN_DIRECTIVES_TOKEN } from '$lib/tokens/markdown-directives.token.js';
	import { type Components, defaultComponents } from '$lib/types/components.js';
	import { type Directives, defaultDirectives } from '$lib/types/directives.js';
	import { getContext, hasContext, setContext } from 'svelte';

	const {
		components: _components,
		directives: _directives,
		node
	}: { components?: Components; directives?: Directives; node: import('mdast').Nodes } = $props();

	const components = {
		...defaultComponents,
		...(_components
			? setContext(MARKDOWN_COMPONENTS_TOKEN, _components)
			: hasContext(MARKDOWN_COMPONENTS_TOKEN)
				? getContext<Components>(MARKDOWN_COMPONENTS_TOKEN)
				: {})
	};

	const directives = {
		...defaultDirectives,
		...(_directives
			? setContext(MARKDOWN_DIRECTIVES_TOKEN, _directives)
			: hasContext(MARKDOWN_DIRECTIVES_TOKEN)
				? getContext<Directives>(MARKDOWN_DIRECTIVES_TOKEN)
				: {})
	};

	const { type } = node;

	const Component =
		directives &&
		(type === 'containerDirective' || type === 'leafDirective' || type === 'textDirective')
			? directives[type][node.name]
			: components[type];

	if (!Component) {
		console.warn(`Unrecognized node type "${type}"`);
	}
</script>

<Component {node} />
