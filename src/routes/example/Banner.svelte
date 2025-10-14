<script lang="ts">
	import { toString } from 'mdast-util-to-string';

	const { node }: { node: import('mdast-util-directive').LeafDirective } = $props();

	let { children, attributes } = $derived(node);

	const { alt, src } = $derived({
		...(attributes as { src: string }),
		alt: toString(children)
	});
</script>

<img {src} {alt} />
