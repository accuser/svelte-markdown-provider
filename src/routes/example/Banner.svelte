<script lang="ts">
	import { toString } from 'mdast-util-to-string';

	const { node }: { node: import('mdast-util-directive').LeafDirective } = $props();

	const { attributes, children } = $derived(node);

	const { alt, src } = $derived.by(() => ({
		...(attributes as { src: string }),
		alt: toString(children)
	}));
</script>

<img {src} {alt} />
