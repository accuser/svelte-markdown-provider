<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import astFromString from '$lib/markdown/ast-from-string.js';
	import type { PageData } from './$types.js';
	import Highlight from './Highlight.svelte';
	import Success from './Success.svelte';
	import YouTube from './YouTube.svelte';

	const { data }: { data: PageData } = $props();

	const ast = $derived.by(() => astFromString(data.src));
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown
		{ast}
		directives={{
			containerDirective: { success: Success },
			leafDirective: { youtube: YouTube },
			textDirective: { hl: Highlight }
		}}
	/>
</article>
