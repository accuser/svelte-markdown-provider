<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types.js';
	import Banner from './Banner.svelte';
	import Toc from './Toc.svelte';

	const { data }: { data: PageData } = $props();

	const { src } = $derived(data);

	let ast: import('mdast').Root;
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown {ast} directives={{ leafDirective: { banner: Banner, toc: Toc } }} {src} />
</article>
