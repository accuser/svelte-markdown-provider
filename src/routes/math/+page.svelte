<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import astFromString from '$lib/markdown/ast-from-string.js';
	import type { PageData } from './$types.js';
	import InlineMath from './InlineMath.svelte';
	import Math from './Math.svelte';

	const { data }: { data: PageData } = $props();

	const ast = $derived.by(() => astFromString(data.src));

	const components = { inlineMath: InlineMath, math: Math };
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown {ast} {components} />
</article>
