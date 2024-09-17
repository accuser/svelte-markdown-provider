<script lang="ts">
	import defaultAstFromString from '$lib/defaults/ast-from-string.js';
	import defaultSlugify from '$lib/defaults/slugify.js';
	import MARKDOWN_COMPONENTS_TOKEN from '$lib/tokens/markdown-components.token.js';
	import MARKDOWN_DIRECTIVES_TOKEN from '$lib/tokens/markdown-directives.token.js';
	import MARKDOWN_SLUGIFY_TOKEN from '$lib/tokens/markdown-slugify.token.js';
	import type { Components } from '$lib/types/components.js';
	import type { Directives } from '$lib/types/directives.js';
	import { setContext } from 'svelte';
	import Node from './Node.svelte';

	let {
		ast = $bindable(),
		astFromString = defaultAstFromString,
		components,
		directives,
		src,
		slugify
	}: (
		| { ast: import('mdast').Root; astFromString?: never; src?: never }
		| { ast?: import('mdast').Root; astFromString?: typeof defaultAstFromString; src: string }
	) & {
		components?: Partial<Components>;
		directives?: Partial<Directives>;
		slugify?: typeof defaultSlugify;
	} = $props();

	if (components) {
		setContext(MARKDOWN_COMPONENTS_TOKEN, components);
	}

	if (directives) {
		setContext(MARKDOWN_DIRECTIVES_TOKEN, directives);
	}

	if (slugify) {
		setContext(MARKDOWN_SLUGIFY_TOKEN, slugify);
	}

	$effect(() => {
		if (src) {
			ast = astFromString(src);
		}
	});
</script>

{#if ast}
	<Node {...ast} />
{/if}
