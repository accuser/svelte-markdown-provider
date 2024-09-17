<script lang="ts">
	import defaultComponents from '$lib/defaults/components.js';
	import MARKDOWN_COMPONENTS_TOKEN from '$lib/tokens/markdown-components.token.js';
	import MARKDOWN_DIRECTIVES_TOKEN from '$lib/tokens/markdown-directives.token.js';
	import isDirective from '$lib/type-guards/is-directive.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';
	import { getContext } from 'svelte';

	const node: import('mdast').Node = $props();

	const components = getContext<Components>(MARKDOWN_COMPONENTS_TOKEN);
	const directives = getContext<Directives>(MARKDOWN_DIRECTIVES_TOKEN);

	const Component = $derived.by((() => {
		if (isDirective(node) && directives && node.type in directives) {
			return directives[node.type][node.name];
		} else if (components && node.type in components) {
			return components[node.type as keyof Components];
		} else {
			return defaultComponents[node.type as keyof Components];
		}
	}) as () => import('svelte').Component<import('mdast').Node>);
</script>

<Component {...node} />
