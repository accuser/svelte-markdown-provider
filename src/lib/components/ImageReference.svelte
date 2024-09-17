<script lang="ts">
	import { ROOT_CONTEXT_TOKEN } from '$lib/tokens/root-context.token.js';
	import { definitions } from 'mdast-util-definitions';
	import { getContext } from 'svelte';

	// TODO: implement `referenceType`?
	const { alt, identifier }: import('mdast').ImageReference = $props();

	const definition = definitions(getContext(ROOT_CONTEXT_TOKEN));

	const { url, title } = $derived.by(
		() => definition(identifier) ?? ({} as import('mdast').Definition)
	);
</script>

<img src={url} {alt} {title} />
