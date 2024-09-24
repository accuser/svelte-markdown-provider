<script lang="ts" module>
	export type Props = import('mdast').ImageReference;
</script>

<script lang="ts">
	import { getMarkdownContext } from '$lib/contexts/markdown-context.js';

	// TODO: implement `referenceType`?
	let { alt, identifier }: Props = $props();

	const { getDefinition } = getMarkdownContext();

	let { url, title } = $derived.by(() => {
		const definition = getDefinition(identifier);

		if (definition) {
			return definition;
		} else {
			return { url: '#', title: undefined };
		}
	});
</script>

<img src={url} {alt} {title} />
