<script lang="ts">
	import markdownContext from '../contexts/markdown-context.js';
	import defaultComponents from '../defaults/components.js';
	import isDirective from '../type-guards/is-directive.js';

	const node: import('mdast').Nodes = $props();

	const Component = $derived.by((() => {
		const { components, directives } = markdownContext();

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
