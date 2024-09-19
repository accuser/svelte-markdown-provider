<script lang="ts" module>
	export type Props = import('mdast').ImageReference;
</script>

<script lang="ts">
	import markdownContext from '../contexts/markdown-context.js';

	// TODO: implement `referenceType`?
	const { alt, identifier }: Props = $props();

	const { url, title } = $derived.by(() => {
		const { getDefinition } = markdownContext();

		const definition = getDefinition(identifier);

		if (definition) {
			return definition;
		} else {
			return { url: '#', title: undefined };
		}
	});
</script>

<img src={url} {alt} {title} />
