<script lang="ts">
	import { defaultComponents } from '$lib/defaults/components.js';
	import { defaultDirectives } from '$lib/defaults/directives.js';
	import { MARKDOWN_COMPONENTS_TOKEN } from '$lib/tokens/markdown-components.token.js';
	import { MARKDOWN_DIRECTIVES_TOKEN } from '$lib/tokens/markdown-directives.token.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';
	import { getContext, hasContext } from 'svelte';

	const { node }: { node: import('mdast').Nodes } = $props();

	const components = hasContext(MARKDOWN_COMPONENTS_TOKEN)
		? getContext<Components>(MARKDOWN_COMPONENTS_TOKEN)
		: ({} as Components);

	const directives = hasContext(MARKDOWN_DIRECTIVES_TOKEN)
		? getContext<Directives>(MARKDOWN_DIRECTIVES_TOKEN)
		: ({} as Directives);

	const Component = $derived.by(() =>
		node.type === 'containerDirective' ||
		node.type === 'leafDirective' ||
		node.type === 'textDirective'
			? (directives[node.type][node.name] ?? defaultDirectives[node.type][node.name])
			: (components[node.type] ?? defaultComponents[node.type])
	);
</script>

<Component {node} />
