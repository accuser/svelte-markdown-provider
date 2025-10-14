<script lang="ts">
	import { Markdown } from '$lib/components/index.js';
	import astFromString from '$lib/defaults/ast-from-string.js';
	import type { PageProps } from './$types.js';

	let { data }: PageProps = $props();

	let { src } = $derived(data);

	let ast = $derived(astFromString(src));
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown {ast} />
</article>
