<script lang="ts">
	import { toString } from 'mdast-util-to-string';

	const { attributes, children }: import('mdast-util-directive').LeafDirective = $props();

	const { alt, src } = $derived.by(() => ({
		...(attributes as { src: string }),
		alt: toString(children)
	}));
</script>

<img {src} {alt} />
