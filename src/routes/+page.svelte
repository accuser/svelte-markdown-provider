<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import astFromString from '$lib/defaults/ast-from-string.js';
	import type { PageData } from './$types.js';
	const { data }: { data: PageData } = $props();

	let { src } = $derived(data);
	let ast = $derived.by(() => astFromString(src, {}));
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown {ast} />
</article>
