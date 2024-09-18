<script lang="ts">
	import defaultComponents from '$lib/defaults/components.js';
	import MARKDOWN_CONTEXT_TOKEN from '$lib/tokens/markdown-context-token.js';
	import isDirective from '$lib/type-guards/is-directive.js';
	import type { MarkdownContext } from '$lib/types/markdown-context.js';
	import { getContext } from 'svelte';

	const node: import('mdast').Nodes = $props();

	const Component = $derived.by((() => {
		const { components, directives } = getContext<MarkdownContext>(MARKDOWN_CONTEXT_TOKEN) ?? {};

		if (directives && isDirective(node) && node.type in directives) {
			const directiveType = directives[node.type];

			return directiveType ? directiveType[node.name] : undefined;
		} else if (components && node.type in components) {
			return components[node.type];
		} else {
			return defaultComponents[node.type];
		}
	}) as () => import('svelte').Component<import('mdast').Nodes>);
</script>

<Component {...node} />
