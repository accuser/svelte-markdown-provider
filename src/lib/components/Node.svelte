<script lang="ts">
	import defaultComponents from '$lib/defaults/components.js';
	import defaultDirectives from '$lib/defaults/directives.js';
	import MARKDOWN_COMPONENTS_TOKEN from '$lib/tokens/markdown-components.token.js';
	import MARKDOWN_DIRECTIVES_TOKEN from '$lib/tokens/markdown-directives.token.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';
	import { getContext, hasContext } from 'svelte';

	const { node }: { node: import('mdast').Nodes } = $props();

	const components = hasContext(MARKDOWN_COMPONENTS_TOKEN)
		? getContext<Components>(MARKDOWN_COMPONENTS_TOKEN)
		: ({} as Components);

	const directives = hasContext(MARKDOWN_DIRECTIVES_TOKEN)
		? getContext<Directives>(MARKDOWN_DIRECTIVES_TOKEN)
		: ({ containerDirective: {}, leafDirective: {}, textDirective: {} } as Directives);

	const Component = $derived.by(() => {
		const { type } = node;

		if (type === 'containerDirective' || type === 'leafDirective' || type === 'textDirective') {
			const { name } = node;

			return directives[type][name] ?? defaultDirectives[type][name] ?? defaultComponents[type];
		} else {
			return components[type] ?? defaultComponents[type];
		}
	});
</script>

<Component {node} />
