<script lang="ts">
	import { ROOT_CONTEXT_TOKEN } from '$lib/tokens/root-context.token.js';
	import { definitions } from 'mdast-util-definitions';
	import { getContext } from 'svelte';

	export let node: import('mdast').ImageReference;

	const definition = definitions(getContext(ROOT_CONTEXT_TOKEN));

	const { alt, identifier } = node;
	const { url, title } = definition(identifier) ?? {};
</script>

<img src={url} {alt} {title} />
