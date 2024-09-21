<script lang="ts" module>
	export type Props = import('mdast').Nodes;
</script>

<script lang="ts">
	import { getMarkdownContext } from '$lib/contexts/markdown-context.js';
	import defaultComponents from '$lib/defaults/components.js';
	import isDirective from '$lib/type-guards/is-directive.js';

	const node: import('mdast').Nodes = $props();

	const { components, directives } = getMarkdownContext();

	const component = $derived.by(() => (components ? components[node.type] : undefined));

	const directive = $derived.by(() => {
		if (directives && isDirective(node)) {
			const { name, type } = node;

			if (directives[type] && directives[type][name]) {
				return directives[type][name];
			}
		}
	});

	const Component = $derived(
		directive || component || defaultComponents[node.type]
	) as import('svelte').Component<import('mdast').Nodes>;
</script>

<Component {...node} />
