<script lang="ts">
	import { MARKDOWN_COMPONENTS_TOKEN } from '$lib/tokens/markdown-components.token.js';
	import { MARKDOWN_DIRECTIVES_TOKEN } from '$lib/tokens/markdown-directives.token.js';
	import { defaultComponents, type Components } from '$lib/types/components.js';
	import { defaultDirectives, type Directives } from '$lib/types/directives.js';
	import { getContext, hasContext, setContext } from 'svelte';

	const {
		components,
		directives,
		node
	}: { components?: Components; directives?: Directives; node: import('mdast').Nodes } = $props();

	const resolvedComponents = components
		? setContext(MARKDOWN_COMPONENTS_TOKEN, components)
		: hasContext(MARKDOWN_COMPONENTS_TOKEN)
			? getContext<Components>(MARKDOWN_COMPONENTS_TOKEN)
			: ({} as Components);

	const resolvedDirectives = directives
		? setContext(MARKDOWN_DIRECTIVES_TOKEN, directives)
		: hasContext(MARKDOWN_DIRECTIVES_TOKEN)
			? getContext<Directives>(MARKDOWN_DIRECTIVES_TOKEN)
			: ({} as Directives);

	const Component =
		node.type === 'containerDirective' ||
		node.type === 'leafDirective' ||
		node.type === 'textDirective'
			? (resolvedDirectives[node.type][node.name] ?? defaultDirectives[node.type][node.name])
			: (resolvedComponents[node.type] ?? defaultComponents[node.type]);

	if (!Component) {
		console.warn(`Unrecognized node type "${node.type}"`);
	}
</script>

<Component {node} />
