<script lang="ts">
	import { toString } from 'mdast-util-to-string';

	const { node }: { node: import('mdast-util-directive').LeafDirective } = $props();

	const { attributes, children } = $derived(node);

	const title = $derived.by(() => toString(children));
	const { v } = $derived(attributes as { v: string });
</script>

<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/{v}"
	{title}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>
