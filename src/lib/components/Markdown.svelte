<script lang="ts">
	import astFromString from '$lib/markdown/ast-from-string.js';
	import { MARKDOWN_COMPONENTS_TOKEN } from '$lib/tokens/markdown-components.token.js';
	import { MARKDOWN_DIRECTIVES_TOKEN } from '$lib/tokens/markdown-directives.token.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';
	import { setContext } from 'svelte';
	import Node from './Node.svelte';

	const {
		ast,
		components,
		directives,
		src
	}: ({ ast: import('mdast').Root; src?: never } | { ast?: never; src: string }) & {
		components?: Partial<Components>;
		directives?: Partial<Directives>;
	} = $props();

	if (components) {
		setContext(MARKDOWN_COMPONENTS_TOKEN, components);
	}

	if (directives) {
		setContext(MARKDOWN_DIRECTIVES_TOKEN, directives);
	}

	const node = $derived.by(() => ast ?? astFromString(src));
</script>

<Node {node} />
