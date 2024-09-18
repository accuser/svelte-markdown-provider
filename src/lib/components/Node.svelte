<script lang="ts">
	import defaultComponents from '$lib/defaults/components.js';
	import MARKDOWN_COMPONENTS_TOKEN from '$lib/tokens/markdown-components.token.js';
	import MARKDOWN_DIRECTIVES_TOKEN from '$lib/tokens/markdown-directives.token.js';
	import isDirective from '$lib/type-guards/is-directive.js';
	import isNode from '$lib/type-guards/is-node.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';
	import { getContext } from 'svelte';

	const node: import('mdast').Nodes = $props();

	const components = getContext<Components>(MARKDOWN_COMPONENTS_TOKEN);
	const directives = getContext<Directives>(MARKDOWN_DIRECTIVES_TOKEN);

	const Component = $derived.by((() =>
		isDirective(node) && directives && node.type in directives && node.name in directives[node.type]
			? directives[node.type][node.name]
			: isNode(node) && components && node.type in components
				? components[node.type]
				: defaultComponents[node.type]) as () => import('svelte').Component<import('mdast').Nodes>);
</script>

<Component {...node} />
