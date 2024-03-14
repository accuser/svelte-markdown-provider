<script lang="ts">
	import { ROOT_CONTEXT_TOKEN } from '$lib/tokens/root-context.token.js';
	import { definitions } from 'mdast-util-definitions';
	import { getContext } from 'svelte';
	import Markdown from './Markdown.svelte';

	export let node: import('mdast').LinkReference;

	const definition = definitions(getContext(ROOT_CONTEXT_TOKEN));

	const { children, identifier } = node;

	const { url, title } = definition(identifier) ?? {};
</script>

<a href={url} {title}
	>{#each children as node}<Markdown {node} />{/each}</a
>
