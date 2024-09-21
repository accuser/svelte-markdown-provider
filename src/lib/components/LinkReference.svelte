<script lang="ts" module>
	export type Props = import('mdast').LinkReference;
</script>

<script lang="ts">
	import { getMarkdownContext } from '$lib/contexts/markdown-context.js';
	import Node from './Node.svelte';

	// TODO: implement `referenceType`?
	const { children, identifier }: Props = $props();

	const { url, title } = $derived.by(() => {
		const { getDefinition } = getMarkdownContext();

		const definition = getDefinition(identifier);

		if (definition) {
			return definition;
		} else {
			return { url: '#', title: undefined };
		}
	});
</script>

<a href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</a
>
